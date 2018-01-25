function sortByValue(a, b) {
  let previousValue = a[1]
  let actualValue = b[1]

  if (previousValue < actualValue) {
    return 1
  }

  if (previousValue > actualValue) {
    return -1
  }

  return 0
}

module.exports = function getResultAsSortedRows(result) {
  return Object
    .keys(result)
    .map(key => [key, result[key]])
    .sort(sortByValue)
}
