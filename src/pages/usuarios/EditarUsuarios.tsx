import { useParams } from "react-router-dom";

export default function EditarUsuarios() {
  const {id} = useParams();
  return (
    <>
      <h3>Editar Usuarios</h3>
      <h4>el id es {id}</h4>
    </>
  );
}
