const data = require('../data/zoo_data');

// feito com mentoria do aluno Italo Lacerda
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((element) => element.firstName === employeeName
  || element.lastName === employeeName);
}

module.exports = getEmployeeByName;
