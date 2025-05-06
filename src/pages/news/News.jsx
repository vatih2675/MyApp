import {formatTanggal, formatJam} from "../../constants/functions"
export default function News({dataNews}){
    function openLink(link){
        window.open(link)
    }
    return (
      <div className="w-full">
        {dataNews !== null ? (
            <>
                <a href={dataNews.link} target="_blank" className="flex justify-start items-center gap-3">
                    {dataNews.image ? (
                        <img src={dataNews.image} alt="logo" className="w-30" />
                    ) : null}
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="font-bold text-xl">{dataNews.title}</h1>
                        <p className="text-sm text-gray-700">{dataNews.description}</p>
                    </div>
                </a>
                <div className="w-full flex flex-col gap-3 mt-5">
                {dataNews.posts.map((post, index) => (
                    <div
                    onClick={() => openLink(post.link)}
                    key={index}
                    className="w-full rounded-xl border border-gray-200 cursor-pointer hover:shadow-md transition-all duration-300 overflow-hidden relative"
                    >
                        {post.thumbnail !== "" ? (
                            <img src={post.thumbnail} alt="thumbnail" className="w-full" />
                        ) : null}
                        <div className="w-full p-3 bg-white transition-all duration-300">
                            <small className="bg-gray-200 px-2 py-1 rounded-full text-xs text-gray-700 me-2">
                                <i className="bi-calendar3 me-1"></i>{formatTanggal(post.pubDate)}
                            </small>
                            <small className="bg-gray-200 px-2 py-1 rounded-full text-xs text-gray-700">
                                <i className="bi-clock me-1"></i>{formatJam(post.pubDate)}
                            </small>
                            <h1 className="font-bold text-lg my-2">{post.title}</h1>
                            <p className="text-sm text-gray-700">{post.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </>
        ) : (
            <span className="italic text-gray-500">Tidak ada data</span>
        )}
        
      </div>
    );
}


