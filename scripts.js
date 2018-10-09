function getWeatherByCity(){
    let url = 'http://api.openweathermap.org/data/2.5/weather?id=4684888&APPID=66177b9f8e05e1e2fccf8a3518573f0a';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let weather = data.main;
        console.log(weather);
        
    })
    .catch(e => {console.log(`An error occurred: ${e}`);});
}

function k2f(kelvin){
    let far;
    let kel = kelvin;
    far = kel * (9/5) - 459.67;
    return Math.round(far);
}
