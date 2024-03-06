import { useState, useEffect } from "react";
import { landigPageDTO } from "../../models/TokensModel";

import ListadoTokens from "../../tokens/ListadoTokens";

export default function LandingPage() {
  const [listatokens, setListaTokens] = useState<landigPageDTO>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setListaTokens({
        listadoTokens: [
          {
            fecha: new Date(),
            idEnablon: "abcdefg",
            idRandom: "d4xnu4",
            lat: 20,
            lon: 57,
            user: "Juan Carlos",
            foto: "http://static2.businessinsider.com/image/575ae527dd0895ff718b4933-1887/google%20maps.jpg",
          },
          {
            fecha: new Date(),
            idEnablon: "abcdefg",
            idRandom: "d4xin3",
            lat: 20,
            lon: 57,
            user: "Carlos Martín",
            foto: "https://maxi-tele.com/wp-content/uploads/2021/11/googlemap.jpg",
          },
          {
            fecha: new Date(),
            idEnablon: "abcdefg",
            idRandom: "d4xasd",
            lat: 20,
            lon: 57,
            user: "Javier Perez",
            foto: "https://i0.wp.com/lopezdoriga.com/wp-content/uploads/2015/07/ma00ps.jpg?fit=1920%2C1080&ssl=1",
          },
        ],
      });
    }, 500);
    return () => clearTimeout(timerId);
  });
  return (
    <>
      <h3>Listado de Tokens Generados</h3>
      <ListadoTokens tokens={listatokens.listadoTokens} />
    </>
  );
}
