import axios from "axios";
import { useEffect, useState } from "react";

export default function Zodiak(){
    const apiZodiak = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhArwBud_Ez4fYX0vfcPlkp7o94oHhuFoDQW3qbP9J2C0jTlc68En13c27z9KwcGVojVOjDui_NthbHJgWV_cmRbZggYI1fQyw1WFqCmyAcymnMRAtiSokO4kqhlNt0FjnqynYgtb7ClXITW6n0dD2c4nJ207IuDqDvJ5629R_NVp6dXnmYlp0veFhzxvsxOLEbQ2AC1xyU4KJ5XafHjZgIgaa7p1v-_x-Cy1lMYEaMoSVkq04ZjAS4kGzHALX4kp7WNyQWxgVT1tihRQ9SV6EbjGn13w&lib=MrUc1Dj5QGJak5lM6a_WiaA05i1M_8GeZ";
    const [zodiak, setZodiak] = useState([])

    const listZodiak = [
        {
            title: "Aquarius",
            slug: "aquarius"
        },
        {
            title: "Aries",
            slug: "aries"
        },
        {
            title: "Cancer",
            slug: "cancer"
        },
        {
            title: "Capricorn",
            slug: "capricorn"
        },
        {
            title: "Gemini",
            slug: "gemini"
        },
        {
            title: "Leo",
            slug: "leo"
        },
        {
            title: "Libra",
            slug: "libra"
        },
        {
            title: "Pisces",
            slug: "pisces"
        },
        {
            title: "Sagitarius",
            slug: "sagitarius"
        },
        {
            title: "Scorpio",
            slug: "scorpio"
        },
        {
            title: "Taurus",
            slug: "taurus"
        },
        {
            title: "Virgo",
            slug: "virgo"
        },
    ]

    async function getZodiak() {
        const dataZodiak = await axios.get(apiZodiak);
        setZodiak(dataZodiak.data);
    }

    useEffect(() => {
        getZodiak();
    }, []);

    // console.log(zodiak)
  return (
    <section className="w-full">
        <h5 className="text-xl font-bold mb-5">Zodiak Hari Ini</h5>
        <div className="w-full flex flex-col justify-center items-center gap-4">
            {listZodiak.map(({title, slug}, index) => (
                <div key={index} className="w-full rounded-xl p-2 bg-white border border-gray-200 shadow-md">
                    <h5 className="font-bold mb-1">{title}</h5>
                    <p className="text-justify text-xs text-gray-800">{zodiak[slug]}</p>
                </div>
            ))}
        </div>
        </section>
  )
}