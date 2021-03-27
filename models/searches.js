const axios = require('axios');

class Searches {
  history = ['Ecuador', 'España', 'Estados Unidos'];
  constructor() {
    //TODO: Leer db si existe
  }

  get paramsApi(){
    return {
          'access_token': process.env.MAPBOX_KEY,
          'limit': 5,
          'language': 'es'
        };
  }
  async city(place) {
    //Petición http 
    try {
            
      const instance  = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsApi
      });
      const resp = await instance.get();
      console.log(resp.data);
      return []; // retornar los lugares
    } catch (error) {
      return []; // retornar los lugares
    }
  }

}

module.exports = Searches;
