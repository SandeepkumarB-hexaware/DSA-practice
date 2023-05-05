let fib = [0,1];

function fibSeries(n) {
  for(let i = 2; i<n ; i++){
    fib[i] = fib[i-2] + fib[i-1];
  }
  
  return fib;
}

console.log(fibSeries(7));
