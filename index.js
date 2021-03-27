require('colors');
require('dotenv').config();
const {
  inquirerMenu,
  readInput,
  pausa/*,
  listTasksDelete,
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
        const place = await readInput('Place: ');
        await searches.city(place);
        /*tareas.createTask(desc);*/
        //Mostrar mensaje 

        //Buscar los lugares

        //Selecionar el lugar

        //Clima

        //Mostrar Resultados

        console.log('\nPlace Information\n'.green);
        console.log('Place:'.green,);
        console.log('Lat:'.green,);
        console.log('Lng:'.green,);
        console.log('Temperature: '.green,);
        console.log('Minimun: '.green,);
        console.log('Maximun: '.green,);

        break;
      case 2:
        tareas.listAll();
        break;
    }
    /*dbSave(tareas.listToArray);*/
    if (opt !== 0) await pausa();
  } while (opt !== 0);

}

main();
