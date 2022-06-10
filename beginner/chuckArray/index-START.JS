/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
//parameters: array numbers
//return: new array with no repeats
//examples: arr1[1,3,6,7,7], [2,2,6,5] // [1,2,3,5,6,7]
//pseudocode: - loop through array

function chunkArray(array, size) {
  let results = []

  for (value of array){

      let finalArray = results[results.length -1 ]
      if(!finalArray || finalArray.length == size){
          results.push([value])
      }else{
          finalArray.push(value)
      }
  }

  return results
}
chunkArray([1,3,6,7,7], [2,2,6,5] )