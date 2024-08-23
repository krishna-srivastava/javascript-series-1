
const apikey="4fe3944e5027fb724bb078792c8fd444"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?unit=metric&q="
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")


async function checkweather(city) {
    let response=await fetch(apiUrl + city + `&appid=${apikey}`) 
    var data=await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML=data.main.temp+"°F";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main == "Mist"){
        weatherIcon.src= "images/mist.png"
    }else if(data.weather[0].main == "Clouds"){
          weatherIcon.scr= "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.scr= "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
    weatherIcon.scr="images/rain.png"
    }else if(data.weather[0].main == "Snow"){
    weatherIcon.scr= "images/snow.png"
    }else if(data.weather[0].main == "Dizzle"){
    weatherIcon.scr= "images/dizzle.png"
    }else if(data.weather[0].main == "Wind"){
    weatherIcon.scr= "images/wind.png"
    }
};

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
