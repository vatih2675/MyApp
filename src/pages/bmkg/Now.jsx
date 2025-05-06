import axios from "axios";
import { useEffect, useState } from "react";
import { formatTanggal } from "../../constants/functions";

export default function Now(){
  const apiTerkini = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";
  const [terkini, setTerkini] = useState([]);

  async function getTerkini() {
    const dataTerkini = await axios.get(apiTerkini);
    setTerkini(dataTerkini.data.Infogempa.gempa);
  }

  useEffect(() => {
    getTerkini();
  }, []);

  // console.log(terkini)
  return (
    <div className="w-[24%] bg-white rounded-xl overflow-hidden">
      <h1 className="font-bold text-xl p-4">Gempa Terbaru</h1>
      <img
        src={`https://data.bmkg.go.id/DataMKG/TEWS/${terkini.Shakemap}`}
        alt="Info Gempa"
        className="w-full"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <small>
            <i className="bi-calendar3 me-1"></i>
            {formatTanggal(terkini.DateTime)}
          </small>
          <small>
            <i className="bi-clock me-1"></i>
            {terkini.Jam}
          </small>
        </div>
        <p className="font-bold">{terkini.Wilayah}</p>
        <p className="py-2">{terkini.Dirasakan}</p>
        <p className="text-sm text-gray-700 mb-3">{terkini.Potensi}</p>
        <p className="text-sm text-gray-600">
          - Koordinat :{" "}
          <span className="text-black font-bold">
            {terkini.Lintang}, {terkini.Bujur}
          </span>
        </p>
        <p className="text-sm text-gray-600">
          - Kekuatan :{" "}
          <span className="text-black font-bold">{terkini.Magnitude} SR</span>
        </p>
        <p className="text-sm text-gray-600">
          - Kedalaman :{" "}
          <span className="text-black font-bold">{terkini.Kedalaman}</span>
        </p>
      </div>
    </div>
  );
}


