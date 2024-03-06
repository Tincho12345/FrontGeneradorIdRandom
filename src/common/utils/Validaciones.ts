import * as Yup from 'yup'
export default function Validaciones(props: validacionesProps){
    Yup.addMethod(Yup.string, 'longitudMinima', function (){
        return this.test('Longitud-Mínima', `Longitud mínima de ${props.longitud}`,
        function (valor) {
            if (valor && valor.length > 0 && props.longitud) {
                return valor.length >= props.longitud;  
            }
            return true;
        })
    })
}

interface validacionesProps {
    longitud?: number; 
}
