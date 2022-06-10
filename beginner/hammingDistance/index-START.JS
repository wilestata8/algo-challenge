/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/
//parameters:
//return:
//examples:
//pseudocode:



function hammingDistance(stringA, stringB) {
  let results = 0

  if (string1.length == string2.length) {

      for (let i = 0; i < string1.length; i++) {
          if (string1[i].toLowerCase() != string2[i].toLowerCase()) {
              results++
          }
      }
      return results
    }
}



module.exports = hammingDistance