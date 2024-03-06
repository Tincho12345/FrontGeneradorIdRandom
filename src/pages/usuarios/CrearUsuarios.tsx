import { useNavigate } from "react-router-dom";
import Button from "../../common/utils/Button";

export default function CrearUsuarios() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Crear Usuarios</h3>
      <Button onClick={() => navigate("/usuarios")}>Guardar</Button>
    </>
  );
}
