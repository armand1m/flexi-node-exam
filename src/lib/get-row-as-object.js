module.exports = function getRowAsObject(row) {
  let object = {}

  row.forEach(item => {
    object[item[0]] = item[1]
  })

  return object
}
