const cliff = require('cliff');
const countTags = require('./lib/count-tags')
const getResultAsSortedRows = require('./lib/get-result-as-sorted-rows')

let tags = process.argv[2].split(',')

countTags('../data', tags)
  .then(getResultAsSortedRows)
  .then(cliff.stringifyRows)
  .then(console.log)


