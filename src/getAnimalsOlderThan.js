const data = require('../data/zoo_data');

// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro,

// retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.

// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:

// Os animais devem ter essa idade ou serem mais velhos.

// Retorne um valor booleano.

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((element) => element.name === animal).residents
    .every((morador) => morador.age >= age);
}

module.exports = getAnimalsOlderThan;
