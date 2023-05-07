function fibonacciRecursive(n) {
  if(n < 2) return n;
  
  return fibonacciRecursive(n-2) + fibonacciRecursive(n -1);
}

console.log(fibonacciRecursive(6)); //8
