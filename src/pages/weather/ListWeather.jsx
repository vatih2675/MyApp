export default function ListWeather({dataWeather}){
    console.log(dataWeather[0])
  return (
    <div className="w-full">
        {dataWeather.map((wth, index) => (
            <div key={index} className="bg-white mb-1">{wth.datetime}</div>
        ))}
    </div>
  )
}


