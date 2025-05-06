import axios from "axios";
import { useEffect, useState } from "react";
import NewsContent from "./Content";

export default function News() {
    const apiNews = "https://api-berita-indonesia.vercel.app/";
    const [news, setNews] = useState([])
    const [channel, setChannel] = useState(0)
    const [category, setCategory] = useState(0)

    function selectChannel(index){
        setChannel(index)
    }

    function selectCategory(index){
        setCategory(index)
    }
    
    async function getNews() {
      const dataNews = await axios.get(apiNews);
      setNews(dataNews.data.endpoints);
    }

    useEffect(() => {
      getNews();
    }, []);

    let selectedChannel = [];
    // let selectedCategory = [];

    for (let i = 0; i < news.length; i++) {
        if(channel == i){
            selectedChannel = news[i];
        }
    }

  return (
    <section className="w-full">
      <h1 className="text-3xl text-center mb-5">
        <i className="bi-newspaper me-1"></i>Berita
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-2 mb-3">
        {news.map((nw, index) => (
          <span
            key={index}
            onClick={() => selectChannel(index)}
            className={`uppercase py-1 px-3 rounded-full text-xs transition-all duration-300 ${
              channel == index
                ? "bg-black text-white shadow-md cursor-default pointer-events-none"
                : "bg-white text-black cursor-pointer hover:bg-black hover:text-white"
            }`}
          >
            {nw.name}
          </span>
        ))}
      </div>
      {selectedChannel.paths !== undefined ? (
          <NewsContent
            categories={selectedChannel.paths}
            category={category}
            selectCategory={selectCategory}
          />
      ) : ""}
    </section>
  );
}


