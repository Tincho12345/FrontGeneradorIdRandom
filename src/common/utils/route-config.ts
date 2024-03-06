import CrearTokens from "../../pages/tokens/CrearTokens";
import EditarTokens from "../../pages/tokens/EditarTokens";
import FiltroTokens from "../../pages/tokens/FiltroTokens";
import IndiceTokens from "../../pages/tokens/IndiceTokens";
import CrearUsuarios from "../../pages/usuarios/CrearUsuarios";
import EditarUsuarios from "../../pages/usuarios/EditarUsuarios";
import FiltroUsuarios from "../../pages/usuarios/FiltroUsuarios";
import IndiceUsuarios from "../../pages/usuarios/IndiceUsuarios";
import LandingPage from "./LandingPage";
import RedireccionarALanding from "./RedireccionarALanding";

const rutas = [
    {path: '/usuarios/crear', componente: CrearUsuarios, title: 'Crear'},
    {path: '/usuarios/editar/:id', componente: EditarUsuarios, title: 'Editar'},
    {path: '/usuarios/filtrar', componente: FiltroUsuarios, title: 'Filtrar'},
    {path: '/usuarios', componente: IndiceUsuarios, title: 'Índice'},

    {path: '/tokens/crear', componente: CrearTokens, title: 'Crear'},
    {path: '/tokens/editar/:id', componente: EditarTokens, title: 'Editar'},
    {path: '/tokens/filtrar', componente: FiltroTokens, title: 'Filtrar'},
    {path: '/tokens', componente: IndiceTokens, title: 'Índice'},

    {path: '/', componente: LandingPage},
    {path: '*', componente: RedireccionarALanding}
]

export default rutas;