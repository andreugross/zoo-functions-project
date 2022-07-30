const data = require('../data/zoo_data');

// A função countAnimals é responsável por contar a quantidade de animais que residem no zoológico.

// Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor.

// Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

// ao receber o argumento { specie: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

// ao passar o argumento { specie: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    return (data.species.find((element) => element.name === animal.specie)).residents.length;
  }
  // ajudinha do Italo Lacerda para fazer essa condição pq não ia rodar nunca.
  if (Object.keys(animal).length === 2) {
    return (data.species
      .find((element) => element.name === animal.specie).residents
      .filter((element) => element.sex === animal.sex).length);
  }
}

module.exports = countAnimals;
