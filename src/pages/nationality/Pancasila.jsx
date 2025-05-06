import axios from "axios";
import { useEffect, useState } from "react"

export default function Pancasila(){
  const apiPancasila = "https://api.npoint.io/68bdeeeaf95739432e74";
  const [pancasila, setPancasila] = useState([])

  async function getPancasila() {
    const dataPancasila = await axios.get(apiPancasila);
    setPancasila(dataPancasila.data);
  }

  useEffect(() => {
    getPancasila();
  }, []);

  // console.log(pancasila)
  return (
    <section className="w-full flex flex-col justify-center items-center gap-3">
      {pancasila.map(({nama, isi, butir}, index) => (
        <div key={index} className="w-full bg-white rounded-xl shadow-md p-4">
          <h1 className="font-bold text-xl mb-3">{nama} : {isi}</h1>
          {butir.map((btr, index) => (
            <div key={index} className="w-full flex justify-start items-start gap-2">
              <p>{index+1}.</p>
              <p className="w-full text-justify">{btr}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}