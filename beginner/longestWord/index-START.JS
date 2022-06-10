/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//parameters:
//return:
//examples:
//pseudocode:


function longestWord(text) {
  let arr = text.split(' ')
  let maxLength = 0
  let results = ''
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
          maxLength = arr[i].length
          results = arr[i]
      }
  }
  return results
}



module.exports = longestWord