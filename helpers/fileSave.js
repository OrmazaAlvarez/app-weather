const fs = require('fs');
const file = './db/data.json'
const dbSave = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
}

const dbRead = () => {
  if (!fs.existsSync(file)) return null;
  const info = fs.readFileSync(file, {encoding: 'utf-8'});
  if (info) return JSON.parse(info); else null
}

module.exports = {
  dbSave,
  dbRead
}
