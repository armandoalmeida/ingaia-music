const request = require("request");
const config = require("./config");

const weather = (city) => {

    return new Promise((resolve, reject) => {

        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${config.weather.appId}`;

        request.get(weatherURL, (error, response, body) => {

            if (!error) {

                const w = JSON.parse(body);
                if (w.cod == 200) {
                    let temp = w.main.temp;

                    let genre = config.genres.lt10;
    
                    if (temp >= 10 && temp < 25)
                        genre = config.genres.btw10_25;
    
                    if (temp >= 25)
                        genre = config.genres.mte25;
    
                    resolve({
                        city: city,
                        country: w.sys.country,
                        temp: temp,
                        genre: genre
                    });
                } else {
                    reject(w);
                }

            } else {
                reject(error);
            }

        });

    })

}

module.exports = weather;