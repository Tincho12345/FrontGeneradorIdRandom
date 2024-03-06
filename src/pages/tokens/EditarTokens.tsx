import { useParams } from "react-router-dom";

export default function EditarTokens() {
  const { id } = useParams();
  return (
    <>
      <h3>Editar Token</h3>
      <h4>el id es {id}</h4>
    </>
  );
}
