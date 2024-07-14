import styles from "./BotaoGuardar.module.css";

export default function BotaoGuardar(props) {
  return <button className={styles.BotaoGuardar}>{props.texto}</button>;
}
