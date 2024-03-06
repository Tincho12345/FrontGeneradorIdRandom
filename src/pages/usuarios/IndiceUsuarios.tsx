import { Link } from "react-router-dom";

export default function IndiceUsuarios() {
  return (
    <>
      <h3>Indice Usuarios</h3>
      <Link to="/usuarios/crear">Crear Usuario</Link>
    </>
  );
}
