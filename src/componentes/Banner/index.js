import styles from "./Banner.module.css";

export default function Banner({
  categoriaDoBanner,
  tituloDoBanner,
  descricaoDoBanner,
  linkDoBanner,
  imagemDoBanner,
  categoriaECor,
}) {
  // const corDaCategoria = categoriaECor.filter(
  //   (categoriaCor) => categoriaCor.categoria === categoriaDoBanner
  // );

  // console.log("A cor da categoria é:", corDaCategoria[0].corPrimaria);
  // console.log("Acategoira e cor é:", categoriaECor[1].corPrimaria);

  const corDaCategoria = categoriaECor.filter(
    (categoriaCor) => categoriaCor.categoria === categoriaDoBanner
  );

  // if (corDaCategoria.length > 0) {
  //   console.log("A cor da categoria é:", corDaCategoria[0].corPrimaria);
  // } else {
  //   console.log("Categoria não encontrada ou vazia.");
  // }

  return (
    <div
      style={{ background: `url(${imagemDoBanner}) ` }}
      className={styles.bannerContainer}
    >
      <div className={styles.bannerInfo}>
        <span
          // style={{ backgroundColor: corDaCategoria[0].corPrimaria }}
          className={styles.bannerTag}
        >
          {categoriaDoBanner}
        </span>
        <h1 className={styles.bannerTitulo}>{tituloDoBanner}</h1>
        <p className={styles.bannerTexto}>{descricaoDoBanner}</p>
      </div>
      <div>
        <a href={linkDoBanner}>
          <img
            className={styles.bannerVideo}
            width="650px"
            height="343px"
            src={imagemDoBanner}
            aria-hidden={true}
          />
        </a>
      </div>
    </div>
  );
}
