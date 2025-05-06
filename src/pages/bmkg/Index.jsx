import Last from "./Last";
import New from "./New";
import Now from "./Now";

export default function Bmkg(){
  return (
    <section className="w-full">
          <h1 className="text-3xl text-center mb-5">
            <i className="bi-tsunami me-2"></i>BMKG / Gempa Bumi
          </h1>
          <div className="w-full flex justify-center items-start gap-3">
            <Now />
            <New />
            <Last />
          </div>
        </section>
  )
}


