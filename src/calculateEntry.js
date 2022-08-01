const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    }
    if (age < 50 && age >= 18) {
      acc.adult += 1;
    }
    if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, {
    child: 0,
    adult: 0,
    senior: 0,
  });
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const amount = countEntrants(entrants);
  let sumTotal = amount.child * data.prices.child;
  sumTotal += amount.adult * data.prices.adult;
  sumTotal += amount.senior * data.prices.senior;

  return sumTotal;
}

module.exports = { calculateEntry, countEntrants };
