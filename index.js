require('colors');
const {
  inquirerMenu,
  pausa/*,
  readInput,
  listTasksDelete,
  confirm,
  showCheckList*/
} = require('./helpers/inquirer');
/*const {dbSave, dbRead} = require('./helpers/fileSave');
const Tasks = require('./models/tasks');
console.clear();*/
const main = async () => {
  let opt = -1;
  /*  const tareas = new Tasks();
    const tareasDB = dbRead();
    if (tareasDB) {
      tareas.readTaskFromArray(tareasDB);
    }*/
  do {
    opt = await inquirerMenu();
    /*switch (opt) {
      case 1:
        const desc = await readInput('Descripción:');
        tareas.createTask(desc);
        break;
      case 2:
        tareas.listAll();
        break;
      case 3:
        tareas.listCompletedPending(true);
        break;
      case 4:
        tareas.listCompletedPending(false);
        break;
      case 5:
        const ids = await showCheckList(tareas.listToArray);
        tareas.toggleCompleted(ids);
        break;
      case 6:
        const id = await listTasksDelete(tareas.listToArray);
        if (id !== 0) {
          const ok = await confirm('Esta seguro que desea borrar la tarea');
          if (ok) {
            tareas.deleteTask(id);
            console.log('Tarea borada'.green);
          }
        }
        break;
    }
    dbSave(tareas.listToArray);*/
    if (opt !== 0) await pausa();
  } while (opt !== 0);

}

main();
