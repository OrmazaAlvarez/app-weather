require('colors');
require('dotenv').config();
const {
  inquirerMenu,
  readInput,
  pause,
  listPlaces/*,
  confirm,
  showCheckList*/
} = require('./helpers/inquirer');
/*const {dbSave, dbRead} = require('./helpers/fileSave');
const Tasks = require('./models/tasks');
console.clear();*/
const Searches = require('./models/searches');
const main = async () => {
  let opt = -1;
  const searches = new Searches();
  /*  conrespst tareas = new Tasks();
    const tareasDB = dbRead();
    if (tareasDB) {
      tareas.readTaskFromArray(tareasDB);
    }*/
  do {
    opt = await inquirerMenu();
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
        console.log('Temperature: '.cyan, weatherPlace.temp);
        console.log('Minimun: '.cyan, weatherPlace.min);
        console.log('Maximun: '.cyan, weatherPlace.max);
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
    }
    /*dbSave(tareas.listToArray);*/
    if (opt !== 0) await pause();
  } while (opt !== 0);

}

main();
