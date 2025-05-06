import ReactAudioPlayer from "react-audio-player";

export default function Random({ random }) {
  // console.log(random)
  return (
    <div className="w-full">
      <h1 className="font-bold text-xl text-center mb-5">Random Ayat</h1>
      <p className="text-center text-2xl">{random.arab}</p>
      <p className="text-center my-3 text-sm">{random.translation}</p>
      <ReactAudioPlayer
        src={random.audio.alafasy}
        controls
        className="w-full h-8 mb-3"
      />
      {/* <audio controls>
        <source src={random.audio.alafasy} />
      </audio> */}
      <div className="flex justify-around items-center gap-1 mb-3">
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-1 w-full">
          <span className="font-bold text-xs">{random.number.inSurah}</span>
          <span className="text-[0.5rem] text-gray-600">Surat</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-1 w-full">
          <span className="font-bold text-xs">{random.number.inQuran}</span>
          <span className="text-[0.5rem] text-gray-600">Quran</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-1 w-full">
          <span className="font-bold text-xs">{random.meta.juz}</span>
          <span className="text-[0.5rem] text-gray-600">Juz</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-1 w-full">
          <span className="font-bold text-xs">{random.meta.page}</span>
          <span className="text-[0.5rem] text-gray-600">Halaman</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-1 w-full">
          <span className="font-bold text-xs">{random.meta.manzil}</span>
          <span className="text-[0.5rem] text-gray-600">Manzil</span>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-md p-1 w-full">
          <span className="font-bold text-xs">{random.meta.ruku}</span>
          <span className="text-[0.5rem] text-gray-600">Ruku</span>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 p-2 mb-2">
        <h1 className="font-bold text-sm">Tafsir Kementrian Agama RI</h1>
        <p className="font-bold text-xs">Tafsir Singkat :</p>
        <p className="text-justify text-xs text-gray-700">
          {random.tafsir.kemenag.short}
        </p>
        <p className="font-bold text-xs mt-1">Tafsir Lengkap :</p>
        <p className="text-justify text-xs text-gray-700">
          {random.tafsir.kemenag.long}
        </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-2 mb-2">
        <h1 className="font-bold text-sm">Tafsir Quraish</h1>
        <p className="text-justify text-xs text-gray-700">
          {random.tafsir.quraish}
        </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-2">
        <h1 className="font-bold text-sm">Tafsir Jalalayn</h1>
        <p className="text-justify text-xs text-gray-700">
          {random.tafsir.jalalayn}
        </p>
      </div>
    </div>
  );
}
