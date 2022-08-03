const data = require('../data/zoo_data');

// obtive ajuda do Matheus Diógenes, ele me ajudou a criar uma linha de raciocínio para desenvolver a lógica e finalizar o exercício.
const achaColaborador = (object) => {
  let parcialResult;
  if (!object) {
    return data.employees.map((element) => element);
  }
  if (object) {
    parcialResult = data.employees.find((element) => element.firstName === object.name
      || element.lastName === object.name || element.id === object.id);
  }
  if (!parcialResult) {
    throw new Error('Informações inválidas');
  }
  return parcialResult;
};

const achaNomeAnimal = (object) => object.responsibleFor.map((animalId) =>
  data.species.find((specie) => specie.id === animalId).name);

const achaLocalAnimal = (object) => object.responsibleFor.map((animalId) =>
  data.species.find((specie) => specie.id === animalId).location);

function getEmployeesCoverage(object) {
  if (!object) {
    return achaColaborador().map((element) => ({
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: achaNomeAnimal(element),
      locations: achaLocalAnimal(element),
    }));
  } return {
    id: achaColaborador(object).id,
    fullName: `${achaColaborador(object).firstName} ${achaColaborador(object).lastName}`,
    species: achaNomeAnimal(achaColaborador(object)),
    locations: achaLocalAnimal(achaColaborador(object)),
  };
}

module.exports = getEmployeesCoverage;
