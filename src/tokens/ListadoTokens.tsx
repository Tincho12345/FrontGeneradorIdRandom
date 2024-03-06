import TokenIndividual from "./TokenIndividual";
import {TokensDTO} from "../models/TokensModel";
import css from "./ListadoTokens.module.css";
import ListadoGenerico from "../common/utils/ListadoGenerico";

export default function ListadoTokens(props: listadoTokensprops) {
  return (
    <ListadoGenerico listado={props.tokens}>
      <div className={css.div}>
        {props.tokens?.map((token) => (
          <TokenIndividual token={token} key={token.idRandom} />
        ))}
      </div>
    </ListadoGenerico>
  );
}

interface listadoTokensprops {
  tokens?: TokensDTO[];
}
