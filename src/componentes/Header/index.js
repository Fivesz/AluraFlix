import styles from "./Menu.module.css";
import LinkAtivo from "../LinkAtivo";

export default function Menu() {
  return (
    <header className={styles.cabecalho}>
      <img src="/imagens/Logo.png" alt="logo AluraFlix" />
      <nav className={styles.navegacao}>
        <ul>
          <li>
            <LinkAtivo to="/">Home</LinkAtivo>
          </li>
          <li>
            <LinkAtivo to="/novovideo">Novo Video</LinkAtivo>
          </li>
        </ul>
      </nav>
    </header>
  );
}
