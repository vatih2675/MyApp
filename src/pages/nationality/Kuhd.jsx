import axios from "axios";
import { useEffect, useState } from "react";

export default function Kuhd() {
  const apiKuhd = "https://api.npoint.io/039466ea448182467b5c";
  const [kuhd, setKuhd] = useState([]);

  async function getKuhd() {
    const dataKuhd = await axios.get(apiKuhd);
    setKuhd(dataKuhd.data);
  }

  useEffect(() => {
    getKuhd();
  }, []);

  // console.log(kuhd)

  return (
    <section className="w-full bg-white rounded-xl p-4">
      <h1 className="font-bold text-2xl text-center">{kuhd.uu}</h1>
      <h2 className="w-full text-center">{kuhd.keterangan}</h2>
      {kuhd.data !== undefined ? (
        <div className="w-full flex flex-col gap-5 mt-5">
          {kuhd.data.map(({ nama, isi }, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg text-center">{nama}</h3>
              <p className="text-center">{isi}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
