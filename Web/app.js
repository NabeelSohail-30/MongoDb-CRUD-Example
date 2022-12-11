const url = window.location.href;
let baseUrl = "";

if (url.split(":")[0] === 'http') {
    baseUrl = 'http://localhost:5001';
} else {
    baseUrl = 'https://ill-pink-gorilla-cuff.cyclic.app';
}

let getWeather = () => {

    //let cityName = document.querySelector("#cityName").value

    axios.get(`${baseUrl}/weather`)
        .then(function (response) {
            // handle success
            console.log("response is success");
            console.log(response.data);

            document.querySelector("#main-data").innerHTML = `${response.data.city} ${response.data.temp}<sup>o</sup>C`;
            document.querySelector("#weather").value = response.data.weather[0].main;
            document.querySelector("#weatherDesc").value = response.data.weather[0].description;
            document.querySelector("#temp").value = response.data.temp + 'C';
            document.querySelector("#feelsLike").value = response.data.feels_like + 'C';
            document.querySelector("#maxTemp").value = response.data.temp_max + 'C';
            document.querySelector("#minTemp").value = response.data.temp_min + 'C';
            document.querySelector("#pressure").value = response.data.pressure + '%';
            document.querySelector("#humidity").value = response.data.humidity + '%';
            document.querySelector("#visibility").value = response.data.visibility + '%';
            document.querySelector("#windSpeed").value = response.data.windspeed + ' mph';
            document.querySelector("#windDirection").value = response.data.winddeg + ' degree';
            document.querySelector("#cloud").value = response.data.clouds + '%';
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
