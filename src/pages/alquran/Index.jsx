import axios from "axios";
import { useEffect, useState } from "react";
import Surah from "./Surah";
import Random from "./Random";

export default function Alquran(){
    const apiQuran = "https://quran-api-id.vercel.app/surahs";
    const apiRandom = "https://quran-api-id.vercel.app/random";
    const [quran, setQuran] = useState(null)
    const [audio, setAudio] = useState(null)
    const [surah, setSurah] = useState(null)
    const [random, setRandom] = useState(null)
    const [numberSurah, setNumberSurah] = useState(1)

    function changeNumberSurah(num, audio){
        setNumberSurah(num)
        setAudio(audio)
    }

    async function getQuran() {
      const dataQuran = await axios.get(apiQuran);
      setQuran(dataQuran.data);
    }
    async function getSurah(num) {
      const dataSurah = await axios.get(apiQuran+"/"+num);
      setSurah(dataSurah.data);
    }
    async function getRandom() {
      const dataRandom = await axios.get(apiRandom);
      setRandom(dataRandom.data);
    }

    useEffect(() => {
      getQuran();
      getSurah(numberSurah);
      getRandom();
    }, [numberSurah]);

    // console.log(surah)
  return (
    <section className="w-full">
        <h1 className="text-3xl text-center mb-5">
            <i className="bi-moon-stars me-2"></i>Alquran
        </h1>
        <div className="w-full flex justify-center items-start gap-2">
            <div className="min-w-3/12 bg-white rounded-xl overflow-hidden shadow-md">
                {quran == null ? (
                    <p className="p-4">Memproses...</p>
                ) : (
                    <>
                        {quran.map((qrn, index) => (
                            <div key={index} onClick={() => changeNumberSurah(qrn.number, qrn.audio)} className={`py-2 px-4 border-b border-gray-200 cursor-pointer transition-all duration-300 flex justify-between items-center ${qrn.number == numberSurah ? "bg-black text-white pointer-events-none cursor-default" : "hover:bg-gray-200 hover:shadow-md text-gray-700 hover:text-black"}`}>
                                <p>{qrn.number}. {qrn.name}</p>
                                <p className="text-xs">({qrn.numberOfAyahs} Ayat)</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="min-w-6/12 bg-white rounded-xl p-4">
                {surah == null ? (
                    <p>Memproses...</p>
                ) : (
                    <Surah surah={surah} audio={audio} />
                )}
            </div>
            <div className="min-w-3/12 bg-white rounded-xl p-4">
                {random == null ? (
                    <p>Memproses...</p>
                ) : (
                    <Random random={random} />
                )}
            </div>
        </div>
    </section>
  )
}