let result = 1;

function factorial(n) {
  for(let i = 2; i<=n ; i++){
    result = result * i;
  }
  
  return result;
}

console.log(factorial(5));
