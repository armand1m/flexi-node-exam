const fs = require('fs')

module.exports = function getFiles(filesPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(filesPath, (err, files) => {
      if (err)
        return reject(err)

      return resolve(files)
    })
  })
}
