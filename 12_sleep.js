/*
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
*/
const cancellable = function(fn, args, t) {
  const cancelFn = function() {
    clearTimeout(timer);
  }

  const timer = setTimeout(() => {
    fn(...args);
  }, t)

  return cancelFn
}
