const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);
  const { residents } = data.species.find((element) => element.id === employee.responsibleFor[0]);
  const oldestAnimal = residents.sort((a, b) => b.age - a.age);
  console.log(oldestAnimal);
  return Object.values(oldestAnimal[0]);
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
