import { Link } from "react-router-dom";

export default function GenerarToken(){
    return(
        <>
            <h3>Generar Token</h3>     
            <Link to="/tokens/editar">Editar Token</Link>
        </>

    )
}