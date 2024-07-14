import styles from "./Editar.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const validarVideo = yup.object().shape({
  titulo: yup.string().required("Este campo é obrigatório"),
  categoria: yup.string().required("Este campo é obrigatório"),
  imagem: yup.string().required("Este campo é obrigatório"),
  link: yup.string().required("Este campo é obrigatório"),
  descricao: yup.string().required("Este campo é obrigatório"),
});

export default function EditarCard() {
  let navigate = useNavigate();

  const { id } = useParams();

  const addVideo = (data) =>
    axios
      .put(
        `https://my-json-server.typicode.com/Fivesz/api-aluraflix/videos/${id}`,
        data
      )
      .then(() => {
        navigate("/");
      })
      .catch(() => {});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validarVideo),
  });

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/Fivesz/api-aluraflix/videos/${id}`
      )
      .then((response) => {
        reset(response.data);
      });
  }, []);

  return (
    <div className={styles.NovoVideoContainer}>
      <div className={styles.NovoVideoContainerInfo}>
        <h1>Editar Vídeo:</h1>
        <p>Altere as informações abaixo para editar um card de vídeo.</p>
      </div>
      <section className={styles.formulario}>
        <form onSubmit={handleSubmit(addVideo)}>
          <div>
            <h2>Editar Card:</h2>
          </div>
          <div className={styles.TituloCategoriaContainer}>
            <div className={styles.campoTexto}>
              <label>Titulo</label>
              <input type="text" name="titulo" {...register("titulo")} />
              <p className={styles.MensagemErro}>{errors.titulo?.message}</p>
            </div>
            <div className={styles.ListaSuspensa}>
              <label>Categoria</label>
              <select name="categoria" {...register("categoria")}>
                <option>Front End</option>
                <option>Back End</option>
                <option>Mobile</option>
              </select>
              <p className={styles.MensagemErro}>{errors.categoria?.message}</p>
            </div>
          </div>
          <div className={styles.ImagemVideoContainer}>
            <div className={styles.campoTexto}>
              <label>Imagem</label>
              <input type="text" name="imagem" {...register("imagem")} />
              <p className={styles.MensagemErro}>{errors.imagem?.message}</p>
            </div>
            <div className={styles.campoTexto}>
              <label>Video</label>
              <input type="text" name="link" {...register("link")} />
              <p className={styles.MensagemErro}>{errors.link?.message}</p>
            </div>
          </div>
          <div>
            <div className={styles.Descricao}>
              <label>Descrição</label>
              <textarea
                type="text"
                name="descricao"
                {...register("descricao")}
              ></textarea>
              <p className={styles.MensagemErro}>{errors.descricao?.message}</p>
            </div>
          </div>
          <div className={styles.Botoes}>
            <button className={styles.BotaoGuardar} type="submit">
              Guardar
            </button>{" "}
            <button
              style={{ borderColor: `#fff` }}
              className={styles.BotaoGuardar}
              type="reset"
            >
              Limpar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
