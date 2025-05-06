import axios from "axios"
import { useState } from "react"

export default function Nik() {
    const [nik, setNik] = useState("")
    const [nikData, setNikData] = useState(null)
    const [text, setText] = useState("Masukkan NIK")
    const [cek, setCek] = useState(true)
    const apiNik = "https://script.google.com/macros/s/AKfycbwwGKJ6JU7xyfpl_fwQpjsOjzoHZAUzTyOsnXJnbNuDyTx8aqvx5OX8TXHGKUT-OTh5/exec?nik="
    function changeNik(e){
        setNik(e.target.value)
    }

    async function getNik(data) {
      const dataNik = await axios.get(data);
      setNikData(dataNik.data);
      setNik("")
      setText("")
      setCek(true)
    }

    function submitForm(e){
        e.preventDefault()
        if(nik.length < 16){
            setText("NIK tidak valid!")
            setNik("")
            setCek(true)
            setNikData(null)
        }else{
            setText("Memproses...")
            setNik("Memproses...")
            setCek(false)
            getNik(apiNik+nik)
        }
    }

  return (
    <section className="w-full">
          <h1 className="text-3xl text-center mb-5">
            <i className="bi-person-vcard me-1"></i>Cek NIK
          </h1>
          <div className="w-4/12 mx-auto mb-3 bg-white rounded-xl overflow-hidden shadow-md p-4">
            <form action="#" method="post" onSubmit={(e) => submitForm(e)} className="flex justify-center items-center rounded overflow-hidden border border-gray-200">
                <input type="text" className="w-full py-1 px-2 focus:ring-0 focus:outline-none" value={nik} onChange={(e) => changeNik(e)} />
                <button type="submit" className={`py-1 px-3 bg-gray-200 cursor-pointer text-gray-400 hover:bg-black hover:text-white transition-all duration-300 flex gap-1 justify-center items-center ${cek ? "" : "pointer-events-none"}`}>
                    {cek ? (
                        <>
                            <i className="bi-check2-all"></i><span>Cek</span>
                        </>
                    ) : (
                        <>
                            <i className="bi-hourglass-split animate-spin"></i><span>Memproses...</span>
                        </>
                    )}
                </button>
            </form>
            {nikData !== null ? (
                <table className="w-full mt-3">
                    <tbody>
                        <tr>
                            <td className="py-1 align-top text-gray-700 w-[30%]">NIK</td>
                            <td className="py-1 align-top text-gray-700 w-[3%]">:</td>
                            <th className="py-1 text-start align-top">{nikData.nik}</th>
                        </tr>
                        <tr>
                            <td className="py-1 align-top text-gray-700">Jenis Kelamin</td>
                            <td className="py-1 align-top text-gray-700">:</td>
                            <th className="py-1 text-start align-top">{nikData.kelamin}</th>
                        </tr>
                        <tr>
                            <td className="py-1 align-top text-gray-700">Tanggal Lahir</td>
                            <td className="py-1 align-top text-gray-700">:</td>
                            <th className="py-1 text-start align-top">{nikData.pasaran}</th>
                        </tr>
                        <tr>
                            <td className="py-1 align-top text-gray-700">Ulang Tahun</td>
                            <td className="py-1 align-top text-gray-700">:</td>
                            <th className="py-1 text-start align-top">{nikData.ultah}</th>
                        </tr>
                        <tr>
                            <td className="py-1 align-top text-gray-700">Usia</td>
                            <td className="py-1 align-top text-gray-700">:</td>
                            <th className="py-1 text-start align-top">{nikData.usia}</th>
                        </tr>
                        <tr>
                            <td className="py-1 align-top text-gray-700">Zodiak</td>
                            <td className="py-1 align-top text-gray-700">:</td>
                            <th className="py-1 text-start align-top uppercase">{nikData.zodiak}</th>
                        </tr>
                        <tr>
                            <td className="py-1 align-top text-gray-700">Domisili</td>
                            <td className="py-1 align-top text-gray-700">:</td>
                            <th className="py-1 text-start align-top">{nikData.kecamatan}, {nikData.kotakab}, {nikData.provinsi} {nikData.kodepos}</th>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <small className="italic text-gray-400 animate-pulse text-center mt-3 block">{text}</small>
            )}
          </div>
        </section>
  )
}


