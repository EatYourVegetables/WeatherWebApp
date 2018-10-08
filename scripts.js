function getWeather(){
    let url = 'http://api.openweathermap.org/data/2.5/weather?id=4684888&APPID=66177b9f8e05e1e2fccf8a3518573f0a';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log('test');
    })
    .catch(e => {console.log(`An error occurred: ${e}`);});
}

