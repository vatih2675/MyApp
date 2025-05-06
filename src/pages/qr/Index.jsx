import { useState } from "react"

export default function Qr(){
    const [qrText, setQrText] = useState("")
    const [qrFormat, setQrFormat] = useState("png")
    const [qrSize, setQrSize] = useState(12)
    const [qrTransparent, setQrTransparent] = useState("")
    const [btnSubmit, setBtnSubmit] = useState(false)
    const [qrCode, setQrCode] = useState(null)

    function changeQrText(e){
        let inputText = e.target.value
        setQrText(inputText);
        if(inputText == ""){
            setBtnSubmit(false)
        }else{
            setBtnSubmit(true)
        }
    }
    function changeQrSize(e){
        setQrSize(e.target.value);
    }
    function changeQrTransparent(e){
        setQrTransparent(e.target.value);
    }
    function changeQrFormat(e){
        setQrFormat(e.target.value);
    }

    function getQrCode(text, size, format, transparent) {
      setQrCode("https://www.qrtag.net/api/qr_"+transparent+size+"."+format+"?url=" + text);
      setQrText("")
      setBtnSubmit(false)
    }

    function submitForm(e){
        e.preventDefault()
        getQrCode(qrText, qrSize, qrFormat, qrTransparent)
    }

    function openLink(link){
      window.open(link)
    }

    // console.log(qrCode)
  return (
    <section className="w-full">
      <h1 className="text-3xl text-center mb-5">
        <i className="bi-qr-code me-2"></i>QR Code Generator
      </h1>
      <div className="w-full mx-auto bg-white rounded-xl shadow-md p-4">
        <form
          action="#"
          method="post"
          className="w-full flex justify-center items-center rounded-lg overflow-hidden border border-gray-300 bg-gray-100"
          onSubmit={(e) => submitForm(e)}
        >
          <input
            type="text"
            className="py-2 px-4 focus:ring-0 focus:outline-none w-full bg-white"
            value={qrText}
            onChange={(e) => changeQrText(e)}
            placeholder="Masukkan link (https://...com)"
          />
          <input
            type="number"
            className="py-2 px-4 focus:ring-0 border-x border-gray-300 focus:outline-none w-[9%]"
            value={qrSize}
            onChange={(e) => changeQrSize(e)}
            min={6}
            placeholder="ukuran (px)"
          />
          <select
            name="transparan"
            id="transparan"
            className="py-2 px-4 focus:ring-0 focus:outline-none"
            value={qrTransparent}
            onChange={(e) => changeQrTransparent(e)}
          >
            <option value={"transparent_"}>Transparan</option>
            <option value={""}>Putih</option>
          </select>
          <select
            name="format"
            id="format"
            className="py-2 px-4 border-x border-gray-300 focus:ring-0 focus:outline-none"
            value={qrFormat}
            onChange={(e) => changeQrFormat(e)}
          >
            <option value={"png"}>PNG</option>
            <option value={"svg"}>SVG</option>
          </select>
          <button
            type="submit"
            className={`py-2 px-4 cursor-pointer ${
              btnSubmit
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-600 pointer-events-none"
            }`}
          >
            Generate
          </button>
        </form>
        {qrCode !== null ? (
          <>
            <img src={qrCode} alt="QR-Code" className="mx-auto mt-4" />
            <p
              className="text-center cursor-pointer transition-all duration-300 hover:text-sky-800"
              onClick={() => openLink(qrCode.substring(40, qrCode.length))}
            >
              {qrCode.substring(40, qrCode.length)}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}


