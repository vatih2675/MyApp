import axios from "axios";
import { useEffect, useState } from "react";

export default function Kuhap() {
  const apiKuhap = "https://api.npoint.io/9974d514b2503c99a089";
  const [kuhap, setKuhap] = useState([]);

  async function getKuhap() {
    const dataKuhap = await axios.get(apiKuhap);
    setKuhap(dataKuhap.data);
  }

  useEffect(() => {
    getKuhap();
  }, []);

  // console.log(kuhap)

  return (
    <section className="w-full bg-white rounded-xl p-4">
      <h1 className="font-bold text-2xl text-center">{kuhap.uu}</h1>
      <h2 className="w-full text-center">{kuhap.keterangan}</h2>
      {kuhap.data !== undefined ? (
        <div className="w-full flex flex-col gap-5 mt-5">
          {kuhap.data.map(({ nama, isi }, index) => (
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
