import Icon from "./Icon";
import Temperature from "./Temperature";
const Country = ({data}) => {

    if(!data) {
        return null
    }


    return(
        <div>
            <h1>country: {data.location.country}</h1>
            <h2>{data.location.region}/{data.location.name}</h2>
            <p>"{data.current.condition.text}"</p>
            <Icon icon={data.current.condition.icon} />
            <p>date: {data.current.last_updated}</p>
            <p>humidity: {data.current.humidity}%</p>
            <p>wind: {data.current.wind_kph} k/h</p>
            <Temperature celcius={data.current.temp_c} Farent={data.current.temp_f}/>
        </div>
    )
}

export default Country;