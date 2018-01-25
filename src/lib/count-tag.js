module.exports = (result, tag) => {
  var count = 0

  result.forEach(item => {
    if (item == tag) {
      count++
    }
  })

  return count
}
