import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" end>
          Inicio
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Tokens */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/tokens">
                Tokens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tokens/filtrar">
                Filtrar Tokens
              </NavLink>
            </li>

            {/* Usuarios */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/usuarios">
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usuarios/filtrar">
                Filtrar Usuarios
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
