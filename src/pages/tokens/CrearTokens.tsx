// import { useNavigate } from "react-router-dom";
import Button from "../../common/utils/Button";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormGroupText from "../../common/utils/FormGroupText";
import Validaciones from "../../common/utils/Validaciones";

Validaciones({ longitud: 5 });

export default function CrearTokens() {
  // const navigate = useNavigate();
  return (
    <>
      <h3>Crear Token</h3>
      <Formik
        initialValues={{
          IdEnablon: "",
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 100));
          console.log(values);
        }}
        validationSchema={Yup.object({
          IdEnablon: Yup.string()
            .required("Este Campo es Requerido...")
            .longitudMinima(),
        })}
      >
        {(formikProps) => (
          <Form>
            <FormGroupText
              campo="IdEnablon"
              label="IdEnablon"
              placeholder="Id Aplicación Enablon"
            />
            <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
            <Link className="btn btn-secondary" to="/tokens">
              Cancelar
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
