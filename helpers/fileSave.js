const fs = require('fs');
const file = './db/data.json'
const dbSave = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
}

const envSave = (NameEnv, Value) => {
  let fileEnv = './.env';
  let info = fs.readFileSync((fs.existsSync(fileEnv) ? fileEnv : './example.env'), {encoding: 'utf-8'});
  if (!info) return null;
  info = info.split('\n').map(line => line.includes(`${NameEnv}=`) ? `${NameEnv}=${Value}` : line).join('\n');
  fs.writeFileSync(fileEnv, info);
}

const dbRead = () => {
  if (!fs.existsSync(file)) return null;
  const info = fs.readFileSync(file, {encoding: 'utf-8'});
  if (info) return JSON.parse(info); else null
}

module.exports = {
  dbSave,
  dbRead,
  envSave
}
