/*
Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
*/

// my version
var chunk = function(arr, size) {
  let chunkedArray = [];
  let segment = [];
  const numberOfChunks = Math.floor(arr.length / size);
  for (let i = 0; i < arr.length; i++) {
    segment.push(arr[i]);
    if ((i + 1) % size === 0) {
      chunkedArray.push(segment);
      segment = [];
    }
    if (i + 1 === arr.length && segment.length > 0) {
      chunkedArray.push(segment);
    }
  }
  return chunkedArray;
}

// cleaner version
var chunk2 = function(arr, size) {
  let chunkedArray = []
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray
}

console.log(chunk2([1, 2, 3, 4, 5,], 2));
