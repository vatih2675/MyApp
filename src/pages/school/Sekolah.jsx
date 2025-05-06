import axios from "axios";
import { useEffect, useState } from "react"

export default function Sekolah(){
    const [sekolah, setSekolah] = useState([]);
    // const [dataSekolah, setDataSekolah] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [searchCat, setSearchCat] = useState("");
    const [searchText, setSearchText] = useState("");

    function changeSearchCat(e){
        setSearchCat(e.target.value)
        setSearchText("")
    }

    function changeSearchText(e){
        setSearchText(e.target.value)
    }

    async function getSekolah(page, perpage, cat = null, textCari = null) {
        let dataSekolah;
        if(cat == ""){
            dataSekolah = await axios.get("https://api-sekolah-indonesia.vercel.app/sekolah?page="+page+"&perPage="+perpage);
        }else if(cat == "Sekolah"){
            if(searchText == ""){
                dataSekolah = await axios.get("https://api-sekolah-indonesia.vercel.app/sekolah?page="+page+"&perPage="+perpage);
            }else{
                dataSekolah = await axios.get("https://api-sekolah-indonesia.vercel.app/sekolah/s?sekolah="+textCari+"&page="+page+"&perPage="+perpage);
            }
        }else if(cat == "NPSN"){
            if(searchText == ""){
                dataSekolah = await axios.get("https://api-sekolah-indonesia.vercel.app/sekolah?page="+page+"&perPage="+perpage);
            }else{
                dataSekolah = await axios.get("https://api-sekolah-indonesia.vercel.app/sekolah?npsn="+textCari+"&page="+page+"&perPage="+perpage);
            }
        }
        setSekolah(dataSekolah.data);
    }

    useEffect(() => {
      getSekolah(page, perPage, searchCat, searchText);
    }, [page, perPage, searchCat, searchText]);

    let totalPage = 1;
    totalPage = Math.ceil(sekolah.total_data / perPage);

    function plusPage() {
      setPage(page + 1);
    }

    function minusPage() {
      setPage(page - 1);
    }

    function firstPage() {
      setPage(1);
    }

    function lastPage() {
      setPage(totalPage);
    }

    function changePerPage(e) {
      setPerPage(e.target.value);
    }

    // console.log(sekolah)
    return (
        <div className="w-full bg-white rounded-xl p-4">
            <div className="flex justify-between items-center gap-2">
                <div className="flex justify-center items-center cursor-default">
                    <span className="mx-2 text-gray-500">Hal :</span>
                    <i className={`bi-chevron-double-left text-xs transition-all duration-300 cursor-pointer  ${page == 1 ? "pointer-events-none text-gray-300" : "text-black"}`} onClick={firstPage}></i>
                    <i className={`bi-chevron-left transition-all duration-300 cursor-pointer  ${page > 1 ? "text-black" : "pointer-events-none text-gray-300"}`} onClick={minusPage}></i>
                    <span className="mx-2 text-lg font-bold">{page}</span>
                    <i className={`bi-chevron-right transition-all duration-300 cursor-pointer  ${page < totalPage ? "text-black" : "pointer-events-none text-gray-300"}`} onClick={plusPage}></i>
                    <i className={`bi-chevron-double-right text-xs transition-all duration-300 cursor-pointer ${page == totalPage ? "pointer-events-none text-gray-300" : "text-black"}`} onClick={lastPage}></i>
                </div>
                <div className="flex justify-center items-center border border-gray-200 overflow-hidden rounded-full bg-gray-100">
                    <select name="kategori" id="kategori" className="p-2 focus:ring-0 focus:outline-none " value={searchCat} onChange={(e) => changeSearchCat(e)}>
                        <option value={""}>- Cari -</option>
                        <option value={"Sekolah"}>Sekolah</option>
                        <option value={"NPSN"}>NPSN</option>
                    </select>
                    <input type="text" name="textsearch" id="textsearch" className="bg-white border-l border-gray-200 p-2 focus:ring-0 focus:outline-none" value={searchText} onChange={(e) => changeSearchText(e)} />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <span className="text-gray-500">Tampilkan</span>
                    <select name="jumlahData" id="jumlahData" className="p-2 focus:ring-0 focus:outline-none border border-gray-200 rounded-lg" value={perPage} onChange={(e) => changePerPage(e)}>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <span className="text-gray-500">data</span>
                </div>
            </div>
            <table className="w-full mt-3 rounded-xl overflow-hidden shadow-md">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="border border-gray-200 p-2">NO</th>
                        <th className="border border-gray-200 p-2">PROVINSI</th>
                        <th className="border border-gray-200 p-2">KABUPATEN / KOTA</th>
                        <th className="border border-gray-200 p-2">KECAMATAN</th>
                        <th className="border border-gray-200 p-2">SEKOLAH</th>
                    </tr>
                </thead>
                {sekolah.dataSekolah !== undefined ? (
                    <tbody>
                        {sekolah.dataSekolah.map(({propinsi, kabupaten_kota, kecamatan, sekolah, npsn}, index) => (
                            <tr key={index}>
                                <td className="border border-gray-200 p-2 text-center">{index+1}</td>
                                <td className="border border-gray-200 p-2 text-center">{propinsi}</td>
                                <td className="border border-gray-200 p-2 text-center">{kabupaten_kota}</td>
                                <td className="border border-gray-200 p-2 text-center">{kecamatan}</td>
                                <td className="border border-gray-200 p-2 text-center">
                                    <p className="font-bold p-0 m-0">{sekolah}</p>
                                    <small className="text-xs text-gray-600">{npsn ? "(NPSN : " + npsn + ")" : ""}</small>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <tbody>
                        <tr>
                            <td colSpan={5} className="border border-gray-200 p-5 text-gray-500 text-center text-sm italic">Tidak ada data!</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
}