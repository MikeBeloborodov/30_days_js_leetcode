var createCounter = function(init) {
  let counter = init;
  return {
    increment() {
      return ++counter;
    },
    decrement() {
      return --counter;
    },
    reset() {
      counter = init;
      return counter;
    }
  }
}

counter = createCounter(10)
counter.increment() // 11
counter.decrement() // 10
counter.reset() // 10
// uses the same closure idea