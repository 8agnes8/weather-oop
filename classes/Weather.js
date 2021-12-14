class Weather{
    constructor(city) {
        this.city = city
        this.key = '57999fc42be802254804f9e211a3bc24'
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
        }


}