const getFiles = require('./get-files')
const getAllFilesTags = require('./get-all-files-tags')
const countTag = require('./count-tag')

module.exports = function(filesPath, tags) {
  return getFiles(filesPath)
    .then(getAllFilesTags.bind(this, filesPath))
    .then(result => {
      let tagCount = {}

      tags.forEach(tag => {
        tagCount[tag] = countTag(result, tag)
      })

      return tagCount
    })
    .catch(err => {
      console.error(err)
    })
}
