import styles from "./Inicio.module.css";
import Banner from "componentes/Banner";
import Categoria from "componentes/Categoria";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Inicio({ categorias }) {
  const [posts, setPosts] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/Fivesz/api-aluraflix/videos")
      .then((response) => {
        setPosts(response.data);
        setBanner(response.data[response.data.length - 1]);
      })
      .catch(() => {});
  }, []);

  return (
    <main>
      <Banner
        categoriaECor={categorias}
        categoriaDoBanner={banner.categoria}
        tituloDoBanner={banner.titulo}
        descricaoDoBanner={banner.descricao}
        linkDoBanner={banner.link}
        imagemDoBanner={banner.imagem}
        corPrimaria={categorias.map((categoria) => categoria.corPrimaria)}
      />

      <div className={styles.CategoriasContainer}>
        {categorias.map((categoria) => (
          <Categoria
            posts={posts}
            categorias={categorias.map((categoria) => categoria.categoria)}
            key={categoria.categoria}
            titulo={categoria.categoria}
            corPrimaria={categoria.corPrimaria}
          />
        ))}
      </div>
    </main>
  );
}
