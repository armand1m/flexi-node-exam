const fs = require('fs')

module.exports = function getFileTags(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file,  'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }

      let allTags = []

      try {
        let object = JSON.parse(data)

        let { children, tags } = object

        if (children) {
          children.forEach(child => {
            if (child.tags) {
              allTags = allTags.concat(child.tags)
            }
          })
        }

        if (tags) {
          allTags = allTags.concat(tags)
        }
      } catch (e) {
        console.error(`${file} is not a valid json.`)
      }

      return resolve(allTags)
    })
  })
}
