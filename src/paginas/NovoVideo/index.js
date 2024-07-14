import styles from "./NovoVideo.module.css";
import NovoForm from "componentes/NovoForm";

export default function NovoVideo() {
  return (
    <div className={styles.NovoVideoContainer}>
      <div className={styles.NovoVideoContainerInfo}>
        <h1>Novo Vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </div>
      <NovoForm />
    </div>
  );
}
