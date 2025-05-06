import axios from "axios";
import { useEffect, useState } from "react";
import { formatTanggal } from "../../constants/functions";

export default function Ftp() {
    const apiFtp = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "eeb4da462cmsh7edc2c93ffd200ap1cc7b4jsn8860164d4d96",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const [ftp, setFtp] = useState([]);
    const [detail, setDetail] = useState(null);
    const [param, setParam] = useState("");

    function openDetail(id){
        setDetail(id)
    }

    function closeDetail(){
        setDetail(null)
    }

    function openLink(link){
        window.open(link)
    }

    function changeParam(text){
        setParam(text)
        closeDetail()
    }

    async function getFtp(param) {
      const dataFtp = await axios.get(apiFtp+param, options);
      setFtp(dataFtp.data);
    }

    useEffect(() => {
      getFtp(param);
    }, [param]);

    // console.log(param.substring(1,9), param.substring(10,param.length))

  return (
    <section className="w-full">
      <h1 className="text-3xl text-center mb-3">
        <i className="bi-controller me-2"></i>Free-To-Play Games
      </h1>
      {param !== "" ? (
        <h3 className="text-center bg-white w-fit mx-auto px-3 rounded-full mb-3 cursor-default">Kategori : <span className="font-bold">{param.substring(10,param.length)}</span></h3>
      ) : ""}
      <h3></h3>
      <div className="w-full flex flex-wrap justify-center items-start">
        {ftp.map(
          (
            {
              thumbnail,
              title,
              developer,
            //   game_url,
              genre,
              platform,
              publisher,
              release_date,
              short_description,
              id,
              freetogame_profile_url,
            },
            index
          ) => (
            <>
                <div
                key={index}
                className="w-3/12 p-2 transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => openDetail(id)}
                >
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <img src={thumbnail} alt={title} className="w-full" />
                        <div className="p-2">
                            <h1 className="font-bold">{title}</h1>
                            <p className="text-sm text-gray-800 my-1">
                                {short_description}
                            </p>
                        {/* <table className="w-full text-xs text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="w-[28%]">Pengembang</td>
                                            <td className="w-[3%]">:</td>
                                            <th className="text-start text-gray-800">{developer}</th>
                                        </tr>
                                        <tr>
                                            <td>Penerbit</td>
                                            <td>:</td>
                                            <th className="text-start text-gray-800">{publisher}</th>
                                        </tr>
                                        <tr>
                                            <td>Genre</td>
                                            <td>:</td>
                                            <th className="text-start text-gray-800">{genre}</th>
                                        </tr>
                                        <tr>
                                            <td>Platform</td>
                                            <td>:</td>
                                            <th className="text-start text-gray-800">{platform}</th>
                                        </tr>
                                    </tbody>
                                </table> */}
                        </div>
                    </div>
                </div>
                <div className={`fixed w-full h-full top-0 left-0 bg-white/90 ${id == detail ? "flex" : "hidden"} justify-center items-center z-99`}>
                    <div className="rounded-xl w-4/12 overflow-hidden bg-white shadow-md border border-gray-200 relative">
                        <i className="absolute top-2 right-2 rounded-full w-7 h-7 bg-white/40 flex justify-center items-center bi-x-lg text-gray-600 hover:bg-white transition-all duration-300 hover:text-red-500 hover:shadow-md cursor-pointer" onClick={closeDetail}></i>
                        <img src={thumbnail} alt={title} className="w-full" />
                        <div className="p-4 cursor-default">
                            <h1 className="font-bold text-xl hover:text-sky-800 w-fit transition-all duration-300 cursor-pointer" onClick={() => openLink(freetogame_profile_url)}>{title}</h1>
                            <p className="text-gray-800 mb-2">{short_description}</p>
                            <div className="flex justify-start items-center text-sm gap-1 mb-3">
                                <span className="bg-gray-200 rounded-full px-2 cursor-pointer hover:bg-gray-300 text-gray-700 hover:text-black transition-all duration-300" onClick={() => changeParam("?category="+genre)}>{genre}</span>
                                <span className="bg-gray-200 rounded-full px-2 cursor-pointer hover:bg-gray-300 text-gray-700 hover:text-black transition-all duration-300" >{platform}</span>
                            </div>
                            <table className="w-full text-xs text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="w-[19%]">Pengembang</td>
                                        <td className="w-[2%]">:</td>
                                        <th className="text-start text-gray-800">{developer}</th>
                                    </tr>
                                    <tr>
                                        <td>Penerbit</td>
                                        <td>:</td>
                                        <th className="text-start text-gray-800">{publisher}</th>
                                    </tr>
                                    <tr>
                                        <td>Release</td>
                                        <td>:</td>
                                        <th className="text-start text-gray-800">{formatTanggal(release_date)}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
          )
        )}
      </div>
    </section>
  );
}
