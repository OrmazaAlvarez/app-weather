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
      }, new inquirer.Separator(),
      {
        value: 3,
        name: `${'3.'.blue} Save the MapBox Token`
      },
      {
        value: 4,
        name: `${'4.'.blue} Save the OpenWeather ApiKey`
      }, new inquirer.Separator(),
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

const pause = async () => {
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
const listPlaces = async (places) => {
  const choices = places.map((places, i) => {
    const idx = `${i + 1}.`.blue;
    return {value: places.id, name: `${idx} ${places.name}`}
  })
  choices.push({
    value: 0, name: '0.'.blue + ' Cancel'
  });
  const optListTasks = [
    {
      type: 'list',
      name: 'id',
      message: 'Select a place',
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
module.exports = {
  inquirerMenu,
  pause,
  readInput,
  listPlaces,
  confirm
};
