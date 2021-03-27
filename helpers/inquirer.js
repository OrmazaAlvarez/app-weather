require('colors');
const inquirer = require('inquirer');
const optMenu = [
  {
    type: 'list',
    name: 'opt',
    message: 'What would you like to do?',
    choices: [
      {
        value: 1,
        name: `${'1.'.blue} Find the place`
      },
      {
        value: 2,
        name: `${'2.'.blue} Search history`
      },
      {
        value: 0,
        name: `${'0.'.blue} Exit\n`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.green);
  console.log(`      Select an ${'option'.blue}     `.green);
  console.log('===========================\n'.green);
  const {opt} = await inquirer.prompt(optMenu);
  return opt;
}

const pausa = async () => {
  const {opt} = await inquirer.prompt([{
    type: 'input',
    name: 'opt',
    message: `\nPress ${'ENTER'.blue} to continue\n`
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
        return 'You must enter a value';
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
    value: 0, name: '0.'.blue + ' Cancel'
  });
  const optListTasks = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
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
      message: 'To select',
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
