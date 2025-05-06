import axios from "axios";
import { useEffect, useState } from "react";
import { angka } from "../../constants/functions";

export default function Gold() {
    const apiGold = "https://logam-mulia-api.vercel.app/prices/";
    const [gold, setGold] = useState([])
    const [source, setSource] = useState('anekalogam')
    const [sourceData, setSourceData] = useState("");

    function selectSource(source){
        setSource(source)
    }

    function openLink(link){
        window.open(link)
    }

    const sources = [
      {
        title: "Aneka Logam",
        slug: "anekalogam",
        link: "https://www.anekalogam.co.id/id",
      },
      // {
      //     title: "Logam Mulia",
      //     slug: "logammulia"
      //     link: "https://www.logammulia.com/id"
      // },
      {
        title: "Harga-Emas.org",
        slug: "hargaemas-org",
        link: "https://harga-emas.org/",
      },
      // {
      //     title: "Pegadaian",
      //     slug: "pegadaian"
      //     link: "https://www.pegadaian.co.id",
      // },
      // {
      //     title: "Semar Nusantara",
      //     slug: "semar"
      // link: "https://goldprice.semar.co.id/home/multi/smg_press/smg",
      // },
      // {
      //     title: "Koin Works",
      //     slug: "koinworks"
      // link: "https://koinworks.com/",
      // },
      {
        title: "Kurs Dollar",
        slug: "kursdolar",
        link: "https://kurs.dollar.web.id/harga-emas-hari-ini.php",
      },
      {
        title: "Cermati",
        slug: "cermati",
        link: "https://www.cermati.com/artikel/harga-emas-hari-ini",
      },
      // {
      //     title: "Bank Syariah Indonesia",
      //     slug: "bsi"
      // link: "https://www.bankbsi.co.id/",
      // },
      // {
      //     title: "Brankas",
      //     slug: "brankaslm"
      // link: "https://brankaslm.com/dashboard",
      // },
      {
        title: "Indo Gold",
        slug: "indogold",
        link: "https://www.indogold.id/",
      },
      {
        title: "Harga-Emas.net",
        slug: "hargaemas-net",
        link: "https://harga-emas.net/",
      },
      {
        title: "Harga-Emas.com",
        slug: "hargaemas-com",
        link: "https://www.hargaemas.com/",
      },
      {
        title: "Inbizia",
        slug: "inbizia",
        link: "https://www.inbizia.com/",
      },
    ];

    // function selectChannel(index){
    //     setChannel(index)
    // }

    // function selectCategory(index){
    //     setCategory(index)
    // }
    
    async function getGold(source) {
        const dataGold = await axios.get(apiGold+source);
        setGold(dataGold.data);
    }

    useEffect(() => {
        getGold(source);
        setSourceData(sources.find(({slug}) => slug === source))
    }, [source]);

    let goldData;

    if(gold.data !== undefined){
        goldData = gold.data[0]
    }

    // console.log(goldData);
  return (
    <section className="w-full">
      <h1 className="text-3xl text-center mb-5">
        <i className="bi-coin me-1"></i>Harga Emas
      </h1>
      <div className="w-full flex justify-center items-start gap-2 mb-3">
        <div className="min-w-2/12 bg-white rounded-xl shadow-md overflow-hidden">
          {sources.map((srcs, index) => (
            <div
              key={index}
              onClick={() => selectSource(srcs.slug)}
              className={`py-2 px-4 border-b border-gray-200 transition-all duration-300 ${
                source == srcs.slug
                  ? "cursor-default pointer-events-none font-bold"
                  : "text-gray-500 hover:bg-gray-200 cursor-pointer"
              }`}
            >
              {srcs.title}
            </div>
          ))}
        </div>
        <div className="w-5/12 rounded-xl bg-white overflow-hidden p-4 shadow-md">
          <h1
            className="font-bold uppercase text-3xl cursor-pointer hover:text-sky-600 transition-all duration-300 mb-3"
            onClick={() => openLink(gold.meta.url)}
          >
            {sourceData.title}
          </h1>
          {goldData !== undefined ? (
            <table className="w-full">
                <tbody>
                <tr>
                    <td className="py-2 align-top w-[20%]">Harga Jual</td>
                    <td className="py-2 align-top w-[3%]">:</td>
                    <th className="py-2 text-start align-top">
                    Rp {goldData.sell == null ? "?" : angka(goldData.sell)} /{" "}
                    {goldData.weight} {goldData.unit}
                    </th>
                </tr>
                <tr>
                    <td className="py-2 align-top">Harga Beli</td>
                    <td className="py-2 align-top">:</td>
                    <th className="py-2 text-start align-top">
                    Rp {goldData.buy == null ? "?" : angka(goldData.buy)} /{" "}
                    {goldData.weight} {goldData.unit}
                    </th>
                </tr>
                <tr>
                    <td className="py-2 align-top">Tipe</td>
                    <td className="py-2 align-top">:</td>
                    <th className="py-2 text-start uppercase align-top">
                    {goldData.type}
                    </th>
                </tr>
                <tr>
                    <td className="py-2 align-top">Info</td>
                    <td className="py-2 align-top">:</td>
                    <th className="py-2 text-start align-top">{goldData.info}</th>
                </tr>
                </tbody>
            </table>
          ) : ""}
        </div>
        <div className="min-w-5/12 rounded-xl overflow-hidden shadow-md">
        {goldData !== undefined ? (
            <iframe src={gold.meta.url} className="w-full aspect-video"></iframe>
        ) : ""}
        </div>
      </div>
    </section>
  );
}


