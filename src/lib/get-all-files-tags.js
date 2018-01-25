const path = require('path')
const getFileTags = require('./get-file-tags')
const getFlatArray = require('./get-flat-array')

module.exports = function(filesPath, files) {
  let promises = files
    .map(file => path.resolve(filesPath, file))
    .map(getFileTags)

  return Promise
    .all(promises)
    .then(getFlatArray)
}
