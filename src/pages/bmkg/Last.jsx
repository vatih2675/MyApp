import axios from "axios";
import { useEffect, useState } from "react";
import { formatTanggal } from "../../constants/functions";

export default function Last() {
  const apiTerakhir = "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json";
  const [terakhir, setTerakhir] = useState([]);

  async function getTerakhir() {
    const dataTerakhir = await axios.get(apiTerakhir);
    setTerakhir(dataTerakhir.data.Infogempa.gempa);
  }

  useEffect(() => {
    getTerakhir();
  }, []);

  //   console.log(terakhir)
  return (
    <div className="w-[38%] bg-white rounded-xl p-4">
      <h1 className="font-bold text-xl mb-4">Gempa Terakhir Yang Terjadi</h1>
      <div className="flex flex-col justify-center items-center gap-3 w-full">
        {terakhir.map(
          (
            {
              DateTime,
              Jam,
              Wilayah,
              Potensi,
              Lintang,
              Bujur,
              Magnitude,
              Kedalaman,
            },
            index
          ) => (
            <div
              key={index}
              className="w-full border border-gray-200 rounded-xl p-4 hover:shadow-md cursor-pointer"
            >
              <div className="flex justify-between items-center text-xs mb-3">
                <p className="bg-black text-white py-1 px-2 rounded-full">
                  <i className="bi-calendar3 me-1"></i>
                  {formatTanggal(DateTime)}
                </p>
                <p className="bg-black text-white py-1 px-2 rounded-full">
                  <i className="bi-clock me-1"></i>
                  {Jam}
                </p>
              </div>
              <p className="font-bold">{Wilayah}</p>
              <p className="">{Potensi}</p>
              <div className="flex justify-between items-center text-xs mt-3">
                <p className="py-1 px-2 rounded-full bg-gray-200">
                  {Lintang}, {Bujur}
                </p>
                <p className="py-1 px-2 rounded-full bg-gray-200">
                  {Magnitude} SR
                </p>
                <p className="py-1 px-2 rounded-full bg-gray-200">
                  {Kedalaman}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
