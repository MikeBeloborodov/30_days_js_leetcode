var expect = function(val) {
  return {
    toBe(test_val) {
      if (test_val === val)
        return true;
      throw "Not equal";
    },
    notToBe(test_val) {
      if (test_val !== val)
        return true;
      throw "Equal";
    }
  };
};

// expect(5).toBe(5) true
// expect(10).toBe(11) throws "Not equal"
// this uses the same idea as the previous task - closures 