const API_KEY = `7438d771b0a0b2722b780a33abe73166`;
const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))

    document.getElementById('city-name').value = '';
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};

const displayWeather = temperature => {
    // console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather-condition', temperature.weather[0].main);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);
}