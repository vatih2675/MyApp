import axios from "axios";
import { useEffect, useState } from "react";
import ListWeather from "./ListWeather";

export default function Weather(){
    const apiWeather = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=75.71.07.1004";
    const [weather, setWeather] = useState(null)

    async function getWeather() {
      const dataWeather = await axios.get(apiWeather);
      setWeather(dataWeather.data);
    }

    useEffect(() => {
      getWeather();
    }, []);

    let lokasi, dataWeather, cuaca;

    if(weather !== null){
        lokasi = weather.lokasi.desa+", "+weather.lokasi.kecamatan+", "+weather.lokasi.kotkab+", "+weather.lokasi.provinsi
        dataWeather = weather.data[0].cuaca;
    }


    // console.log(dataWeather, cuaca);
    return (
      <section className="w-full">
        <h1 className="text-3xl text-center">
          <i className="bi-cloud-moon me-1"></i>Cuaca
        </h1>
        <p className="text-center">{lokasi}</p>
        {dataWeather !== undefined ? (
            <ListWeather dataWeather={dataWeather} />
        ) : null}
      </section>
    );
}


