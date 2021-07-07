import { useState } from "react";

const Temperature = ({celcius, Farent}) => {
    const [data, setData] = useState(celcius);
    const [grados, setGrados] = useState('°C')

    const Gcelcius = () => {
        setData(celcius)
        setGrados('°C')
    }

    const Gfarent = () => {
        setData(Farent)
        setGrados('°F')
    }

    return(
        <div>
            <p>temperature: {data}{grados}</p>
            <button className='temperatureButton' onClick={() => {
                if(data === celcius) {
                    Gfarent()
                }else{
                    Gcelcius()
                }
            }}>C/F°</button>
        </div>
    )
}

export default Temperature;