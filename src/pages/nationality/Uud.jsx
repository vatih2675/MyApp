import axios from "axios";
import { useEffect, useState } from "react";

export default function Uud(){
  const apiUud = "https://api.npoint.io/bb286bbb0d5d782f8466";
  const [uud, setUud] = useState([])

  async function getUud() {
    const dataUud = await axios.get(apiUud);
    setUud(dataUud.data);
  }

  useEffect(() => {
    getUud();
  }, []);

  // console.log(uud)
  return (
    <section className="w-full bg-white rounded-xl p-4">
      <h1 className="font-bold text-2xl text-center">{uud.uu}</h1>
      <h2 className="w-full text-center">{uud.keterangan}</h2>
      {uud.data !== undefined ? (
        <div className="w-full flex flex-col gap-5 mt-5">
          {uud.data.map(({nama, isi}, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg text-center">{nama}</h3>
              <p className="text-center">{isi}</p>
            </div>
          ))}
        </div>
        ) : ""}
    </section>
  )
}