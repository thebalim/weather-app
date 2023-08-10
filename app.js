const input = document.querySelector('#input');
const city = document.querySelector('#city');

const cityName = document.querySelector('#cityName');
const temp = document.querySelector('#temp');
const main = document.querySelector('#main');
const discription = document.querySelector('#discription');
const image = document.querySelector('#image');

input.onsubmit = (e) => {
    e.preventDefault();
    weatherUpdate(city.value);
    city.value = "";
};


weatherUpdate = (city) => {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cad7ec124945dcfff04e457e76760d90`);

    xhr.send();
    xhr.onload = () => {
        console.log(xhr);
        console.log(xhr.response);
        if (xhr.status === 404){
            // alert("place not found");
        } else {
            let data = JSON.parse(xhr.response);
            cityName.innerHTML = data.name;
            temp.innerHTML = `${Math.round(data.main.temp - 273.15)} C`;
            main.innerHTML = data.weather[0].main;
            discription.innerHTML = data.weather[0].description;
            image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        }
    };
};

weatherUpdate('london');
