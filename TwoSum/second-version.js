function findPairs(array, target) {
  const indices = {};
  const n = array.length;
  
  for (let i = 0; i < n; i++) {
    const complement = target - array[i];
    if (indices[complement] !== undefined) {
      return [indices[complement], i]
    }

    indices[array[i]] = i;
  }
  // Not found
  return [];
}

// example usage:
const array = [3, 4, 1, 7, 6, 9];

console.log(findPairs(array, 5));  // output: [1, 2]
console.log(findPairs(array, 10));  // output: [0, 3]
console.log(findPairs(array, 50));  // output: []