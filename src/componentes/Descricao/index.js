import styles from "./Descricao.module.css";

export default function Descricao(props) {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className={styles.Descricao}>
      <label>Descrição</label>
      <textarea
        value={props.valor}
        onChange={aoDigitado}
        placeholder="Sobre o que é esse vídeo?"
      ></textarea>
    </div>
  );
}
