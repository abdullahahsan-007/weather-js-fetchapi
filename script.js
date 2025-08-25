 const searchbox = document.getElementById("searchvalue");
    const searchbtn = document.getElementById("searchbtn");
    const weatherimg = document.getElementById("w-image");

    const apikey = APIKEY;

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
    
    async function checkWeatheer(city) {
        const response = await fetch (apiUrl + city + `&appid=${apikey}`);


        if(response.status == '404'){
          document.getElementById("error").style.display = 'block';
          document.getElementById("weather").style.display = "none";
          document.getElementById("w-cont").style.display = "none";
          return;
        }

        var data = await response.json();
        // console.log(data);

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = Math.round(data.main.temp)  + " °C";
        document.getElementById("Humidity").innerHTML = data.main.humidity + " %";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
        // const iconcode = data.weather[0].icon;
        // document.getElementById("w-image").src = `http://openweathermap.org/img/wn/${iconcode}@2x.png`; 

       

        if(data.weather[0].main == "Clouds"){
          weatherimg.src = "assets/clouds.png"
        }
        else if(data.weather[0].main == "Clear")
        {
          weatherimg.src = "assets/Sun.png"
        }
        else if(data.weather[0].main == "Drizzle")
        {
          weatherimg.src = "assets/drizzle.png"
        }
        else if(data.weather[0].main == "Mist")
        {
          weatherimg.src = "assets/Mist.png"
        }
        else if(data.weather[0].main == "Rain")
        {
          weatherimg.src = "assets/rain.png"
        }
        
        document.getElementById("error").style.display = "none";
        document.getElementById("weather").style.display = "block";
        document.getElementById("w-cont").style.display = "flex";
    }

    searchbtn.addEventListener("click" , ()=> {

      checkWeatheer(searchbox.value.trim());
    })
    searchbox.addEventListener("keydown" , (e)=> {

      if (e.key == "Enter" ){
      checkWeatheer(searchbox.value.trim());
      }
    })
