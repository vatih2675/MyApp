import axios from "axios";
import { useEffect, useState } from "react";

export default function Kuhp() {
  const apiKuhp = "https://api.npoint.io/c30ddb1bfd31aa78adc1";
  const [kuhp, setKuhp] = useState([]);

  async function getKuhp() {
    const dataKuhp = await axios.get(apiKuhp);
    setKuhp(dataKuhp.data);
  }

  useEffect(() => {
    getKuhp();
  }, []);

  // console.log(kuhp)

  return (
    <section className="w-full bg-white rounded-xl p-4">
      <h1 className="font-bold text-2xl text-center">{kuhp.uu}</h1>
      <h2 className="w-full text-center">{kuhp.keterangan}</h2>
      {kuhp.data !== undefined ? (
        <div className="w-full flex flex-col gap-5 mt-5">
          {kuhp.data.map(({ nama, isi }, index) => (
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
