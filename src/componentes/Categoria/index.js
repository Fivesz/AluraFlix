import Card from "componentes/Card";
import styles from "./Categoria.module.css";

export default function Categoria(props) {
  const corTituloCategoria = { backgroundColor: props.corPrimaria };

  const categoriaDoVideo = props.posts.filter(
    (post) => post.categoria == props.titulo
  );

  return (
    <section className={styles.Categoria}>
      <h3 style={corTituloCategoria}>{props.titulo}</h3>
      <div className={styles.CategoriaCardContainer}>
        {categoriaDoVideo.map((post) => {
          return <Card corPrimaria={props.corPrimaria} {...post} />;
        })}
      </div>
    </section>
  );
}
