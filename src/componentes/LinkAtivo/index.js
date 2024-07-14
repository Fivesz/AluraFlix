import { Link, useLocation } from "react-router-dom";
import styles from "./LinkAtivo.module.css";

export default function LinkAtivo({ children, to }) {
  const localizacao = useLocation();

  return (
    <Link
      className={`${styles.link} ${
        localizacao.pathname === to ? styles.linkAtivo : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
