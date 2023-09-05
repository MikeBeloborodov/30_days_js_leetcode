/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
*/
var addTwoPromises = async function(promise1, promise2) {
  const [value1, value2] = Promise.all([promise1, promise2])
  return new Promise((resolve, reject) => {
    resolve(value1, value2)
  })
}

// Promise.all() takes an array of promises and returns an array of resolves in the same order
// Time complexity depends on the slowest promise.