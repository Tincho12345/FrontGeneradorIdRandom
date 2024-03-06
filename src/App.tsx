import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./common/utils/Menu";
import rutas from "./common/utils/route-config";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Menu />
          <Routes>
            {rutas.map((ruta) => (
              <Route 
                path={ruta.path}
                key={ruta.path}
                element={<ruta.componente />}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
