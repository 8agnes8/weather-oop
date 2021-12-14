//weather object

const weather = new Weather('Tallinn')
//ui object
const  ui = new UI()

//get city weather
function getWeather(){
    weather.getWeather()
        .then(data => {

        })
        .catch(error => console.log(error))
}

getWeather()