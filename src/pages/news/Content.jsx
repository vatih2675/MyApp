import axios from "axios";
import { useEffect, useState } from "react";
import News from "./News";
import Zodiak from "./Zodiak";

export default function NewsContent({ categories, category, selectCategory }) {
  let apiCategory = "";
  for (let i = 0; i < categories.length; i++) {
    if (category == i) {
      apiCategory = categories[i].path;
    }
  }

  let [selCat, setSelCat] = useState([]);

  async function getSelectedNews() {
    const dataSelectedNews = await axios.get(apiCategory);
    setSelCat(dataSelectedNews.data);
  }

  useEffect(() => {
    getSelectedNews();
  }, [apiCategory]);

  // console.log(category, apiCategory, selCat.data);
  return (
    <div className="flex justify-center items-start gap-3">
      <div className="min-w-2/12 flex flex-col rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300">
        {categories.map((ctg, index) => (
          <span
            key={index}
            onClick={() => selectCategory(index)}
            className={`w-full block px-4 py-2 transition-all duration-300 cursor-pointer uppercase ${
              index == category
                ? "bg-black text-white cursor-default pointer-events-none"
                : "text-gray-700 hover:text-black hover:bg-gray-200 hover:shadow-md border-b border-gray-200"
            }`}
          >
            {ctg.name}
          </span>
        ))}
      </div>
      <div className="w-6/12 rounded-xl bg-white shadow-md p-5">
        {selCat.data !== undefined ? <News dataNews={selCat.data} /> : ""}
      </div>
      <div className="w-4/12 rounded-xl bg-white shadow-md p-5">
        <Zodiak />
      </div>
    </div>
  );
}


