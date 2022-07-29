const data = require('../data/zoo_data');

// A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:

// Deve retornar true se o id passado for de uma pessoa gerente;

// Deve retornar false se o id passado não for de uma pessoa gerente.

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

// A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:

// Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:

// Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.

// ajuda do João Matheus
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((element) => element.managers.includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
