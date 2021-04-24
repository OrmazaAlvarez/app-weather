const {dbRead, dbSave} = require('../helpers/fileSave');
const axios = require('axios');

class Searches {
  constructor() {
    //TODO: Leer db si existe
  }

  get paramsMapBox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'es'
    };
  }
  paramsOpenWeather(lat, lon) {
    return {
      'lat': lat,
      'lon': lon,
      'appid': process.env.OPENWEATHER_KEY,
      'units': 'metric',
      'lang': 'es'
    };
  }
  async citys(place) {
    try {

      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        responseType: 'json',
        params: this.paramsMapBox
      });
      const resp = await instance.get();
      return resp.data.features.map(place => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1]
      })); // retornar los lugares
    } catch (error) {
      return []; // retornar los lugares
    }
  }
  async weatherPlace(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: this.paramsOpenWeather(lat, lon)
      });
      const resp = await instance.get();
      return {
        name: resp.data.name,
        desc: resp.data.weather[0].description,
        temp: resp.data.main.temp,
        min: resp.data.main.temp_min,
        max: resp.data.main.temp_max
      }; // retornar los lugares
    } catch (error) {
      console.log(error);
      return []; // retornar los lugares
    }
  }
  async addHistory(name) {
    let history = dbRead();
    if (history) {
      if (history.includes(name.toLocaleLowerCase())) return;
      history.unshift(name.toLocaleLowerCase());
    } else {
      history = [];
      history.push(name.toLocaleLowerCase());
    }
    dbSave(history);
  }

  get listHistory() {
    const history = dbRead();
    if (!history) return history;
    return history.map(search => {
      let words = search.split(' ');
      words = words.map(word => word[0].toUpperCase() + word.substring(1));
      return words.join(' ');
    });
  }
}

module.exports = Searches;
