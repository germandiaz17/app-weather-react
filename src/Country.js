import Icon from "./Icon";
// import Temperature from "./Temperature";
const Country = ({data}) => {
    console.log(data);

    if(!data) {
        return null
    }


    return(
        <div>
            <h1>country: {data.location.country}</h1>
            <h2>{data.location.region}/{data.location.name}</h2>
            <p>{data.current.condition.text}</p>
            <p>date: {data.current.last_updated}</p>
            <p>humidity: {data.current.humidity}%</p>
            <p>wind: {data.current.wind_kph} k/h</p>
            <Icon icon={data.current.icon} />
            {/* <Temperature celcius={data.current.temp_c}/> */}
        </div>
    )
}

export default Country;