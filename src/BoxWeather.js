import {useEffect, useState} from 'react'
import {Call} from './Call'
const BoxWeather = () => {
    const[country, setCountry] = useState('')

    const getLocation = async () => {
      const data = await Call();
      setCountry(data);
    }
  
  
    useEffect(() => {
      getLocation();
    }, []);
    return (
        <div className='box'>
            <div className='title-box'>Box Weather</div>
            <div className='content-box'>
                <h1>country: {country.location.country}</h1>
                <h3>city: {country.location.name}</h3>
                <h3>Local Time: {country.location.localtime}</h3>
                <h3>temperature: {country.location.temp_c}°c</h3>
            </div>
        </div>
    )
}

export default BoxWeather;