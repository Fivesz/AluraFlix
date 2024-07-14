import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Card(props) {
  const cardStyles = {
    brilhoECor: {
      borderColor: props.corPrimaria,
      boxShadow: `0px 0px 10px ${props.corPrimaria}`,
    },
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/Fivesz/api-aluraflix/videos")
      .then((response) => {
        setCards(response.data);
      })
      .catch(() => {});
  }, []);

  function ApagarCard(id) {
    axios.delete(
      `https://my-json-server.typicode.com/Fivesz/api-aluraflix/videos/${props.id}`
    );
    setCards(cards.filter((card) => card.id != props.id));
  }

  return (
    <figure style={cardStyles.brilhoECor} className={styles.Card}>
      <a href={props.link}>
        <img
          style={cardStyles.brilhoECor}
          className={styles.CardImagem}
          src={props.imagem}
          alt=""
          aria-hidden={true}
        />
      </a>
      <figcaption>
        <footer className={styles.CardRodape}>
          <button onClick={() => ApagarCard(props.id)}>
            <img src="/icones/deletar.png" alt="" aria-hidden={true} />
            Deletar
          </button>
          <Link to={{ pathname: `/edit/${props.id}` }}>
            <button>
              <img src="/icones/editar.png" alt="" aria-hidden={true} />
              Editar
            </button>
          </Link>
        </footer>
      </figcaption>
    </figure>
  );
}
