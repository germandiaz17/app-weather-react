import "./App.css";
import BoxWeather from "./BoxWeather";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {  
    let getPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);
    }    
    let response = navigator.geolocation;
    response.getCurrentPosition(getPosition);    
  },[])


  useEffect(() => {
    const getApi = async () => {
      const url = `https://api.weatherapi.com/v1/current.json?key=f9b03e8d6dfa4675b42223408210207&q=${latitude},${longitude}&aqi=no`
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    if(latitude && longitude){
      getApi();
    }
  }, [latitude, longitude]);

  return (
    <div className="App">
      <BoxWeather
        data={data}
      />
    </div>
  );
}

export default App;
