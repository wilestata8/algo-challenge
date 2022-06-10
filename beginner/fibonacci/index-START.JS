/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/
//parameters:
//return:
//examples:
//pseudocode:


function fibonacci(n) {
  let first = 1,
      current = 1

  if (n <= 1) {
      return 1
  } else {
      let counter = n - 1

      while (counter) {
          let temp = first
          current += first
          first = temp
          counter --
      }
  }
  return current
}

module.exports = fibonacci