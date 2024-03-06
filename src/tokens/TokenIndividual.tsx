import {TokensDTO} from "../models/TokensModel";
import css from "./TokenIndividual.module.css";

export default function TokenIndividual(props: tokenindividualProps) {
  const construirLink = () => `/tokens/${props.token.idRandom}`;
  var fecha = new Date()
    .toLocaleDateString("es")
    .replace(/ /g, "-")
    .replace(".", "")
    .replace(/-([a-z])/, function (x) {
      return "-" + x[1].toUpperCase();
    });

  return (
    <div className={css.div}>
      <a href={construirLink()}>
        <img src={props.token.foto} alt="imagen" />
      </a>
      <p>
        <a href={construirLink()}>IdRandom: {props.token.idRandom} </a>
      </p>
      <p>Usuario: {props.token.user}</p>
      <p>Fecha: {fecha}</p>
      <p>Enablon: {props.token.idEnablon}</p>
    </div>
  );
}

interface tokenindividualProps {
  token: TokensDTO;
}
