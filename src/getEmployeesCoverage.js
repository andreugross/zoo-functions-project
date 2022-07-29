const data = require('../data/zoo_data');

function getEmployeesCoverage(object) {
  const parcialResult = data.employees.find((element) => element.firstName === object.name
    || element.lastName === object.name || element.id === object.id);
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
