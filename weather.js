const cityID=document.getElementById("city")
const submitBtn=document.getElementById("submit")

submitBtn.addEventListener("click", function(){
    console.log(cityID.value)


    const key = 'eb5ecdf2372c98634887e453c34185fa';
function weatherBallon( cityID ) {
    
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID.value+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
        //drawWeather(data);
        drawWeather(data)
        console.log(data)
	})
	.catch(function(error) {
		console.log(error)
	});
}
function drawWeather( data ) {
  var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
  var description = data.weather[0].description; 
	var description2= data.weather[0].main;
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
	document.getElementById('location').innerHTML = data.name;
  
    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }else if( description.indexOf('snow') > 0) {
        document.body.className = 'snowy';
    }
    else  {
        document.body.className= `clear`;
    }
}
weatherBallon( cityID );
})  

	

 

