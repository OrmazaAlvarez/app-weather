require('colors');
require('dotenv').config();
const {
  inquirerMenu,
  readInput,
  pause,
  listPlaces,
  confirm
} = require('./helpers/inquirer');
const Searches = require('./models/searches');
const main = async () => {
  let opt = -1;
  const searches = new Searches();
  do {
    opt = await inquirerMenu();
    if (!searches.MaxboxToken && opt > 0 && opt < 3) {
      console.log(`You need to register the MAPBOX Token to use this option`);
      await pause();
      continue;
    }
    if (!searches.WeatherApiKey && opt > 0 && opt < 3) {
      console.log(`You need to register the ApiKEY of OPENWEATHER to use this option`);
      await pause();
      continue;
    }
    switch (opt) {
      case 1:
        //Mostrar mensaje
        const placeSearch = await readInput('Place: ');
        //Buscar los lugares 
        const places = await searches.citys(placeSearch);
        //Selecionar el lugar
        const id = await listPlaces(places);
        if (id === 0) continue;
        const selectedPlace = places.find(l => l.id === id);
        searches.addHistory(selectedPlace.name);
        //Clima
        const weatherPlace = await searches.weatherPlace(selectedPlace.lat, selectedPlace.lng);
        //Mostrar Resultados
        console.log('\nInformation\n'.green);
        console.log('Searched data:'.cyan, placeSearch.blue);
        console.log('Selected place:'.cyan, selectedPlace.name.blue);
        console.log('\nApi results'.green);
        console.log('Place:'.cyan, weatherPlace.name.blue);
        console.log('Lat:'.cyan, selectedPlace.lat);
        console.log('Lng:'.cyan, selectedPlace.lng);
        console.log('Temperature: '.cyan, weatherPlace.temp, '°C');
        console.log('Minimun: '.cyan, weatherPlace.min, '°C');
        console.log('Maximun: '.cyan, weatherPlace.max, '°C');
        console.log('Weather: '.cyan, weatherPlace.desc.blue);
        break;
      case 2:
        const history = searches.listHistory
        if (history) {
          history.forEach((search, i) => {
            const idx = `${i + 1}.`.blue;
            console.log(`${idx} ${search.cyan}`);
          });
        } else {console.log("Empty search history");}
        break;
      case 3:
        const newToken = await readInput('MAPBOX Token: ');
        var ok = true;
        if (searches.MaxboxToken) {
          ok = await confirm('Do you want to replace the current Token');
        }
        if (ok) {
          await searches.saveMaxboxToken(newToken);
          console.log('Saved token'.green);
        }
        break;
      case 4:
        const newKey = await readInput('OPENWEATHER ApiKEY: ');
        var ok = true;
        if (searches.WeatherApiKey) {
          ok = await confirm('Do you want to replace the current ApiKEY');
        }
        if (ok) {
          await searches.saveWeatherApiKey(newKey);
          console.log('Saved ApiKey'.green);
        }
        break;
    }
    /*dbSave(tareas.listToArray);*/
    if (opt !== 0) await pause();
  } while (opt !== 0);

}

main();
