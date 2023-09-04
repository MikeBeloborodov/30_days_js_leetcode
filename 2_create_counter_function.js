const createCounter = function (n) {
  return function () {
    return n++;
  }
}

const counter = createCounter(10);
counter() //10
counter() //11
counter()// ...

// n is stored like a private parameter and will increment whenever you call it

//this uses closures 
// https://leetcode.com/problems/counter/solutions/3491300/day2-o-1-understanding-closure-in-easy-way-and-its-practical-uses/?envType=study-plan-v2&envId=30-days-of-javascript