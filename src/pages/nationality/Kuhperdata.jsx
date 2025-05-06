import axios from "axios";
import { useEffect, useState } from "react";

export default function Kuhperdata() {
  const apiKuhperdata = "https://api.npoint.io/e0e154ddb62f296577f6";
  const [kuhperdata, setKuhperdata] = useState([]);

  async function getKuhperdata() {
    const dataKuhperdata = await axios.get(apiKuhperdata);
    setKuhperdata(dataKuhperdata.data);
  }

  useEffect(() => {
    getKuhperdata();
  }, []);

  // console.log(kuhperdata)

  return (
    <section className="w-full bg-white rounded-xl p-4">
      <h1 className="font-bold text-2xl text-center">{kuhperdata.uu}</h1>
      <h2 className="w-full text-center">{kuhperdata.keterangan}</h2>
      {kuhperdata.data !== undefined ? (
        <div className="w-full flex flex-col gap-5 mt-5">
          {kuhperdata.data.map(({ nama, isi }, index) => (
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
