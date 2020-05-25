function smail(array) {
    const random = Math.floor(Math.random() * array.length)
    return array[random]
  }
  
  function getShortUrl() {
    const lowerAbc = 'abcdefghijklmnopqrstuvwxyz'
    const upperAbc = lowerAbc.toUpperCase()
    const numbers = '1234567890'
    const shortUrlLength = 5
  
    let box = []
  
    box = box.concat(lowerAbc.split(''))
    box = box.concat(upperAbc.split(''))
    box = box.concat(numbers.split(''))
  
    let shortURL = ''
    for (let i = 0; i < shortUrlLength; i++) {
      shortURL += smail(box)
    }
    return shortURL}

    module.exports = getShortUrl