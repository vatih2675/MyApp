import {  useState } from "react"
import Pancasila from "./Pancasila";
import Uud from "./Uud";
import Kuhp from "./Kuhp";
import Kuhperdata from "./Kuhperdata";
import Kuhd from "./Kuhd";
import Kuhap from "./Kuhap";

export default function Nationality(){
  const menuNationality = ["Pancasila", "UUD 1945", "KUHP", "KUHPERDATA", "KUHD", "KUHAP"];
  const [nationality, setNationality] = useState("Pancasila")

  function changeNationality(data){
    setNationality(data);
  }

  let viewNationality;

  if (nationality == "Pancasila") {
    viewNationality = <Pancasila />;
  } else if (nationality == "UUD 1945") {
    viewNationality = <Uud />;
  } else if (nationality == "KUHP") {
    viewNationality = <Kuhp />;
  } else if (nationality == "KUHPERDATA") {
    viewNationality = <Kuhperdata />;
  } else if (nationality == "KUHD") {
    viewNationality = <Kuhd />;
  } else if (nationality == "KUHAP") {
    viewNationality = <Kuhap />;
  }

  return (
    <section className="w-full">
          <h1 className="text-3xl text-center mb-5">
            <i className="bi-flag me-1"></i>Kewarganegaraan
          </h1>
          <div className="flex justify-center items-center w-full gap-2">
            {menuNationality.map((ntl, index) => (
              <span key={index} onClick={() => changeNationality(ntl)} className={`py-1 px-3 rounded-full transition-all duration-300 cursor-pointer hover:shadow-md ${nationality === ntl ? "bg-black text-white pointer-events-none" : "bg-white text-gray-600 hover:bg-gray-200"}`}>{ntl}</span>
            ))}
          </div>
          <div className="mt-5">
            {viewNationality}
          </div>
        </section>
  )
}


