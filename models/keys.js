const {envSave} = require('../helpers/fileSave');

class Keys {

  constructor() {
    this._maxboxToken = process.env.MAPBOX_KEY;
    this._weatherApiKey = process.env.OPENWEATHER_KEY;
  }

  get MaxboxToken() {
    return this._maxboxToken;
  }

  get WeatherApiKey() {
    return this._weatherApiKey;
  }

  async saveMaxboxToken(Value) {
    envSave('MAPBOX_KEY', Value);
    this._maxboxToken = Value;
  }

  async saveWeatherApiKey(Value) {
    envSave('OPENWEATHER_KEY', Value);
    this._weatherApiKey = Value;
  }

}

module.exports = Keys;
