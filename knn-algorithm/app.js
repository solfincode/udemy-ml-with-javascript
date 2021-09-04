const _ = require("lodash");

//output and variable for algorithm [dropPosition,bounciness,ballSize,bucketLabel]
const input = [
  [10, 0.5, 15, 1],
  [200, 0.5, 15, 2],
  [350, 0.5, 10, 4],
  [600, 0.5, 13, 10],
  [10, 0.5, 15, 1],
  [200, 0.5, 15, 7],
  [350, 0.5, 10, 4],
  [600, 0.5, 13, 5],
  [10, 0.5, 15, 1],
  [200, 0.5, 15, 9],
  [150, 0.5, 10, 2],
  [800, 0.5, 13, 5],
  [10, 0.5, 15, 1],
  [200, 0.5, 15, 2],
  [50, 0.5, 10, 4],
  [600, 0.5, 13, 10],
  [100, 0.5, 15, 1],
  [200, 0.5, 15, 3],
  [350, 0.5, 10, 4],
  [600, 0.5, 13, 2],
  [10, 0.5, 15, 1],
  [500, 0.5, 15, 10],
  [550, 0.5, 10, 10],
  [800, 0.5, 13, 5],
];
const predictionNumber = 700;
const k = 3;

//run analysis
function runAnalysis() {
  const result = _.chain(input)
    .map((row) => [distance(row[0]), row[3]])
    .sortBy((row) => row[0])
    .slice(0, k)
    .countBy((row) => row[1])
    .toPairs()
    .sortBy((row) => row[1])
    .last()
    .first()
    .value();
  console.log(result);
}

function distance(point) {
  return Math.abs(point - predictionNumber);
}

runAnalysis();
