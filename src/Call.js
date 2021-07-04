const getPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude)
    console.log(longitude)
}
const prop = () => {
    const location = navigator.geolocation;
    location.getCurrentPosition(getPosition)
}

prop();

export const Call = async () => {
    try {
        let url = 'https://api.weatherapi.com/v1/current.json?key=f9b03e8d6dfa4675b42223408210207&q=colombia&aqi=no';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};