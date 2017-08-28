const countCharacters = (word) => {
  let characterCount = {}
  let characters = word.split('')

  characters.forEach((character) => {
    if (characterCount[character] !== undefined) {
      characterCount[character] = characterCount[character] + 1
    } else {
      characterCount[character] = 1
    }
  })
  return characterCount
}

module.exports = { countCharacters }