const data = require('../data/zoo_data');

// feito com ajuda do Sérgio Henrique e João Marcelo e Thalis Venancio
function getSpeciesByIds(...ids) {
  return data.species.filter((element) => ids.find((parm1) => parm1 === element.id));
}

module.exports = getSpeciesByIds;
