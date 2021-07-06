import "./App.css";
import BoxWeather from "./BoxWeather";
import { useEffect, useState } from "react";
function App() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [data, setData] = useState(null)
  
  const {x, y} = position;


  useEffect(() => {
    let getPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setPosition({
        x : latitude,
        y : longitude
      });
    }
  
    let response = navigator.geolocation;
    response.getCurrentPosition(getPosition);


    const getApi = async () => {
      const url = `https://api.weatherapi.com/v1/current.json?key=f9b03e8d6dfa4675b42223408210207&q=${x},${y}&aqi=no`
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    getApi();
  }, [x, y]);

  return (
    <div className="App">
      <BoxWeather
        data={data}
      />
    </div>
  );
}

export default App;
