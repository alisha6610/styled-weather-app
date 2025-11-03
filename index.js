function getWeather() {
    const divRef = document.querySelector("#weather");
    const cityInputRef = document.querySelector
    ("#cityName");
    const cityName = cityInputRef.value;
   
    const res = axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`);

    res
    .then((data) => {
      divRef.innerHTML = `weather of ${cityName} is 
      ${data.data.current.temp_c}`;
    })
    .catch((err) => {
        console.log(err);
    });
}
