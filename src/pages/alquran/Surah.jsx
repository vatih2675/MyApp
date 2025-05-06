import { useState } from "react"
import ReactAudioPlayer from "react-audio-player";

export default function Surah({surah, audio}){
    const [numberAyah, setNumberAyah] = useState(null)
    function changeNumberAyah(num){
        setNumberAyah(num)
    }
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">
          {surah.number}. {surah.name} ({surah.translation})
        </h1>
        {/* <audio controls autoPlay>
                <source src={audio} />
            </audio> */}
      </div>
      <p className="text-justify text-xs text-gray-800 my-2">
        {surah.description}
      </p>
      <div className="flex justify-between items-center text-xs mb-4">
        <span className="text-gray-700 bg-gray-200 px-2 rounded-full">
          Turun di : <span className="text-black">{surah.revelation}</span>
        </span>
        <span className="bg-gray-200 px-2 rounded-full">
          {surah.numberOfAyahs} Ayat
        </span>
      </div>
      {surah.ayahs !== undefined ? (
        <>
          {surah.number > 1 ? (
            <>
              <div className="w-full p-4 border-t border-gray-300 relative hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:shadow-md">
                <span className="absolute top-0 right-0 px-1 text-[0.6rem] font-bold border-x border-b border-gray-300 bg-gray-200 rounded-b-lg">
                  1
                </span>
                <p className="text-center text-2xl">{surah.bismillah.arab}</p>
                <p className="text-center text-sm">
                  {surah.bismillah.translation}
                </p>
                <ReactAudioPlayer
                  src={surah.bismillah.audio.alafasy}
                  controls
                  className="mx-auto mt-4 h-8"
                />
              </div>
              {surah.ayahs.map((ayh, index) => (
                <>
                  <div
                    key={index}
                    onClick={() => changeNumberAyah(ayh.number.inQuran)}
                    className="w-full p-4 border-t border-gray-300 relative hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <span className="absolute top-0 right-0 px-1 text-[0.6rem] font-bold border-x border-b border-gray-300 bg-gray-200 rounded-b-lg">
                      {ayh.number.inSurah + 1}
                    </span>
                    <p className="text-center text-2xl">{ayh.arab}</p>
                    <p className="text-center text-sm">{ayh.translation}</p>
                    <ReactAudioPlayer
                      src={ayh.audio.alafasy}
                      controls
                      className="mx-auto mt-4 h-8"
                    />
                  </div>
                  {ayh.number.inQuran == numberAyah ? (
                    <div className="fixed w-full h-full bg-white top-0 left-0 z-10 p-8 overflow-auto">
                      <i
                        onClick={() => changeNumberAyah(null)}
                        className="absolute top-2 right-2 bi-x w-6 h-6 text-gray-600 hover:shadow-md rounded-full flex justify-center items-center border border-gray-200 bg-white cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300"
                      ></i>
                      <p className="text-center text-5xl">{ayh.arab}</p>
                      <p className="text-center my-3">{ayh.translation}</p>
                      <ReactAudioPlayer
                        src={ayh.audio.alafasy}
                        controls
                        className="mx-auto my-4"
                      />
                      <div className="flex justify-center items-center gap-3 mb-5">
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.number.inSurah}
                          </span>
                          <span className="text-xs text-gray-600">
                            Nomor di Surat
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.number.inQuran}
                          </span>
                          <span className="text-xs text-gray-600">
                            Nomor di Quran
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.juz}
                          </span>
                          <span className="text-xs text-gray-600">Juz</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.page}
                          </span>
                          <span className="text-xs text-gray-600">Halaman</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.manzil}
                          </span>
                          <span className="text-xs text-gray-600">Manzil</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.ruku}
                          </span>
                          <span className="text-xs text-gray-600">Ruku</span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 mb-3">
                        <h1 className="font-bold text-xl mb-2">
                          Tafsir Kementrian Agama RI
                        </h1>
                        <p className="font-bold">Tafsir Singkat :</p>
                        <p className="text-justify">
                          {ayh.tafsir.kemenag.short}
                        </p>
                        <p className="font-bold mt-2">Tafsir Lengkap :</p>
                        <p className="text-justify">
                          {ayh.tafsir.kemenag.long}
                        </p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 mb-3">
                        <h1 className="font-bold text-xl mb-2">
                          Tafsir Quraish
                        </h1>
                        <p className="text-justify">{ayh.tafsir.quraish}</p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 mb-3">
                        <h1 className="font-bold text-xl mb-2">
                          Tafsir Jalalayn
                        </h1>
                        <p className="text-justify">{ayh.tafsir.jalalayn}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </>
          ) : (
            <>
              {surah.ayahs.map((ayh, index) => (
                <>
                  <div
                    key={index}
                    onClick={() => changeNumberAyah(ayh.number.inQuran)}
                    className="w-full p-4 border-t border-gray-300 relative hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <span className="absolute top-0 right-0 px-1 text-[0.6rem] font-bold border-x border-b border-gray-300 bg-gray-200 rounded-b-lg">
                      {ayh.number.inSurah}
                    </span>
                    <p className="text-center text-2xl">{ayh.arab}</p>
                    <p className="text-center text-sm">{ayh.translation}</p>
                    <ReactAudioPlayer
                      src={ayh.audio.alafasy}
                      controls
                      className="mx-auto mt-4 h-8"
                    />
                  </div>
                  {ayh.number.inQuran == numberAyah ? (
                    <div className="fixed w-full h-full bg-white top-0 left-0 z-10 p-8 overflow-auto">
                      <i
                        onClick={() => changeNumberAyah(null)}
                        className="absolute top-2 right-2 bi-x w-6 h-6 text-gray-600 hover:shadow-md rounded-full flex justify-center items-center border border-gray-200 bg-white cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300"
                      ></i>
                      <p className="text-center text-5xl">{ayh.arab}</p>
                      <p className="text-center my-3">{ayh.translation}</p>
                      <ReactAudioPlayer
                        src={ayh.audio.alafasy}
                        controls
                        className="mx-auto my-4"
                      />
                      <div className="flex justify-center items-center gap-3 mb-5">
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.number.inSurah}
                          </span>
                          <span className="text-xs text-gray-600">
                            Nomor di Surat
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.number.inQuran}
                          </span>
                          <span className="text-xs text-gray-600">
                            Nomor di Quran
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.juz}
                          </span>
                          <span className="text-xs text-gray-600">Juz</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.page}
                          </span>
                          <span className="text-xs text-gray-600">Halaman</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.manzil}
                          </span>
                          <span className="text-xs text-gray-600">Manzil</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-xl p-2 w-30">
                          <span className="font-bold text-2xl">
                            {ayh.meta.ruku}
                          </span>
                          <span className="text-xs text-gray-600">Ruku</span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 mb-3">
                        <h1 className="font-bold text-xl mb-2">
                          Tafsir Kementrian Agama RI
                        </h1>
                        <p className="font-bold">Tafsir Singkat :</p>
                        <p className="text-justify">
                          {ayh.tafsir.kemenag.short}
                        </p>
                        <p className="font-bold mt-2">Tafsir Lengkap :</p>
                        <p className="text-justify">
                          {ayh.tafsir.kemenag.long}
                        </p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 mb-3">
                        <h1 className="font-bold text-xl mb-2">
                          Tafsir Quraish
                        </h1>
                        <p className="text-justify">{ayh.tafsir.quraish}</p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 mb-3">
                        <h1 className="font-bold text-xl mb-2">
                          Tafsir Jalalayn
                        </h1>
                        <p className="text-justify">{ayh.tafsir.jalalayn}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </>
          )}
        </>
      ) : (
        "Memproses..."
      )}
    </div>
  );
}