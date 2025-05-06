import axios from "axios";
import { useEffect, useState } from "react";

export default function Address() {
    const apiProvince = "https://alamat.thecloudalert.com/api/provinsi/get/";
    const apiCity = "https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=";
    const apiDistrict = "https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=";
    const apiVillage = "https://alamat.thecloudalert.com/api/kelurahan/get/?d_kecamatan_id=";
    const [province, setProvince] = useState([])
    const [selectProvince, setSelectProvince] = useState(null)
    const [city, setCity] = useState([])
    const [selectCity, setSelectCity] = useState(null)
    const [district, setDistrict] = useState([]);
    const [selectDistrict, setSelectDistrict] = useState(null)
    const [village, setVillage] = useState([]);
    const [selectVillage, setSelectVillage] = useState(null)
    const [zipCode, setZipCode] = useState([]);

    async function getProvince() {
      const dataProvince = await axios.get(apiProvince);
      setProvince(dataProvince.data.result);
    }

    async function getCity(province_id) {
      const dataCity = await axios.get(apiCity + province_id);
      setCity(dataCity.data.result);
    }

    async function getDistrict(city_id) {
      const dataDistrict = await axios.get(apiDistrict + city_id);
      setDistrict(dataDistrict.data.result);
    }

    async function getVillage(district_id) {
      const dataVillage = await axios.get(apiVillage + district_id);
      setVillage(dataVillage.data.result);
    }

    async function getZipCode(city_id, district_id) {
      const dataZipCode = await axios.get("https://alamat.thecloudalert.com/api/kodepos/get/?d_kabkota_id="+city_id+"&d_kecamatan_id=" + district_id);
      setZipCode(dataZipCode.data.result);
    }

    function changeProvince(e){
        if(e.target.value == ""){
            setSelectProvince(null)
            setSelectCity(null)
            setSelectDistrict(null)
            setSelectVillage(null)
            setCity([])
            setDistrict([])
            setVillage([])
        }else{
            setSelectProvince(e.target.value)
            setSelectCity(null)
            setSelectDistrict(null)
            setSelectVillage(null)
            setCity([])
            setDistrict([])
            setVillage([])
            getCity(e.target.value);
        }
    }
    
    function changeCity(e){
        if(e.target.value == ""){
            setSelectCity(null)
            setSelectDistrict(null)
            setSelectVillage(null)
            setDistrict([])
            setVillage([])
        }else{
            setSelectCity(e.target.value)
            setSelectDistrict(null)
            setSelectVillage(null)
            setDistrict([])
            setVillage([])
            getDistrict(e.target.value);
        }
    }
    
    function changeDistrict(e){
        if(e.target.value == ""){
            setSelectDistrict(null)
            setSelectVillage(null)
            setVillage([])
        }else{
            setSelectDistrict(e.target.value)
            setSelectVillage(null)
            setVillage([])
            getVillage(e.target.value);
        }
    }
    
    function changeVillage(e){
        if(e.target.value == ""){
            setSelectVillage(null)
            setZipCode([])
        }else{
            setSelectVillage(e.target.value)
            setZipCode([])
            getZipCode(selectCity, selectDistrict);
        }
    }

    useEffect(() => {
        getProvince();
    }, []);

    // console.log(zipCode);
  return (
    <section className="w-full">
      <h1 className="text-3xl text-center mb-5">
        <i className="bi-geo-alt me-1"></i>Alamat Indonesia / Kode Pos
      </h1>
      <div className="w-4/12 mx-auto mb-3 bg-white rounded-xl overflow-hidden shadow-md p-4">
        <form action="#" method="post" className="flex flex-col gap-3">
            <select name="provinsi" id="provinsi" className="w-full border border-gray-200 rounded py-2 px-3 focus:ring-0 focus:outline-none focus:shadow-md" onChange={(e) => changeProvince(e)}>
                <option value="">- Provinsi -</option>
                {province.map(({id, text}, index) => (
                    <option key={index} value={id}>{text}</option>
                ))}
            </select>
            {selectProvince !== null ? (
                <select name="kota" id="kota" className="w-full border border-gray-200 rounded py-2 px-3 focus:ring-0 focus:outline-none focus:shadow-md" onChange={(e) => changeCity(e)}>
                    <option value="">- Kota / Kabupaten -</option>
                    {city.map(({id, text}, index) => (
                        <option key={index} value={id}>{text}</option>
                    ))}
                </select>
            ) : ""}
            {selectCity !== null ? (
                <select name="kecamatan" id="kecamatan" className="w-full border border-gray-200 rounded py-2 px-3 focus:ring-0 focus:outline-none focus:shadow-md" onChange={(e) => changeDistrict(e)}>
                    <option value="">- Kecamatan -</option>
                    {district.map(({id, text}, index) => (
                        <option key={index} value={id}>{text}</option>
                    ))}
                </select>
            ) : ""}
            {selectDistrict !== null ? (
                <select name="desa" id="desa" className="w-full border border-gray-200 rounded py-2 px-3 focus:ring-0 focus:outline-none focus:shadow-md" onChange={(e) => changeVillage(e)}>
                    <option value="">- Kelurahan / Desa -</option>
                    {village.map(({id, text}, index) => (
                        <option key={index} value={id}>{text}</option>
                    ))}
                </select>
            ) : ""}
            {selectVillage !== null ? (
                <p className="px-2">Kode Pos : 
                    {zipCode.map(({id, text}, index) => (
                        <span key={index+id} className="font-bold"> {text}{index < zipCode.length ? ", " : ""}</span>
                    ))}
                </p>
            ) : ""}
        </form>
      </div>
    </section>
  );
}


