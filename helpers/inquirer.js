require('colors');
const inquirer = require('inquirer');
const optMenu = [
  {
    type: 'list',
    name: 'opt',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: `${'1.'.blue} Buscar Ciudad`
      },
      {
        value: 2,
        name: `${'2.'.blue} Historial`
      },
      {
        value: 0,
        name: `${'0.'.blue} Salir\n`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.green);
  console.log('   Seleccione una opción   '.green);
  console.log('===========================\n'.green);
  const {opt} = await inquirer.prompt(optMenu);
  return opt;
}

const pausa = async () => {
  const {opt} = await inquirer.prompt([{
    type: 'input',
    name: 'opt',
    message: `\nPresione ${'ENTER'.blue} para continuar\n`
  }]);
  return opt;
}
const readInput = async (message) => {
  const {desc} = await inquirer.prompt([{
    type: 'input',
    name: 'desc',
    message,
    validate(value) {
      if (value.length === 0)
        return 'Por favor ingrese un valor';
      else
        return true;
    }
  }]);
  return desc;
}
const listTasksDelete = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.blue;
    return {value: tarea.id, name: `${idx} ${tarea.desc}`}
  })
  choices.push({
    value: 0, name: '0.'.blue + ' Cancelar'
  });
  const optListTasks = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices
    }
  ];
  const {id} = await inquirer.prompt(optListTasks);
  return id;
}
const confirm = async (message) => {
  const {ok} = await inquirer.prompt([{
    type: 'confirm',
    name: 'ok',
    message
  }]);
  return ok;
}
const showCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.blue;
    return {value: tarea.id, name: `${idx} ${tarea.desc}`, checked: tarea.completadoEn ? true : false}
  })
  const optCheckList = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccionar',
      choices
    }
  ];
  const {ids} = await inquirer.prompt(optCheckList);
  return ids;
}

module.exports = {
  inquirerMenu,
  pausa,
  readInput,
  listTasksDelete,
  confirm,
  showCheckList
};
