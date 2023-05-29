function foo(array) {
    let current = 0;
    let best = 0;
  
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
      if (element > 0) {
        current += 1;
        best = best > current ? best : current;
      } else {
        current = 0;
      }
    }
  
    return best;
  }
  
  console.log('2', foo([1,1,0,1,1,0]));
  console.log('3', foo([1,1,0,1,1,1]));
  console.log('5', foo([1,1,1,1,1]));
  console.log('0', foo([0,0,0]));
  console.log('0', foo([]));