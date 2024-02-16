let weather = {
    apikey: "c4aa23ba82aaabadedd0ebef66c7e0e6",
    fetchWeather: function(city){
        if(city=='India' || city =='india'){
            city = 'Republic Of India';
        }

        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apikey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText= "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?"+ description + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});


/*let s=0;
carousel(s);

function prevreview(){
    s=s-1;
    carousel(s);
}
 
function nextreview(){
    s=s+1;
    carousel(s);
}

function carousel(slides){
    let slide = document.getElementsByClassName("slide_bar");

    if(slides>=slide.length){
        slides=0;
        s=0;
    }
    if(slides<0){
        slides=slide.length-1;
        s=slide.length-1;
    }
    for(let i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }
    slide[slides].style.display="block";
}*/