/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

//parameters: strings, array ,
//return: new version of array that is capitalized
//examples: let sent1= "resilient coders saved my life" reurn "Resilient Coders Saved My life"
//pseudocode: - split text to array  of individual chracters,
//-loop through array capitalize the first index
// - return results and join them back to a string 



function capSentence(text) {
  let arr = text.toLowerCase().split(' ')
  let capArr = []

  arr.forEach(word => {
      capArr.push(word[0].toUpperCase() + word.slice(1))
  });

  return capArr.join(' ')
}
capSentence("resilent coders saved my life")
 




module.exports = capSentence