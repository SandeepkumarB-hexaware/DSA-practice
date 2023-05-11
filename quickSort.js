function quickSort(arr){

 if(arr.length < 1) return arr;
 
 let left = [];
 let right = [];
 let pivot = arr[arr.length-1]; // taking last element as a pivot
 
 for(let i=0;i<arr.length-1;i++){
   if(arr[i] < pivot){
     left.push(arr[i])
   }else{
     right.push(arr[i]);
   }
 }
 
 return [...quickSort(left),pivot,...right];
  
}

console.log(quickSort([20,-8,6,-2,3])); // [ -8, -2, 3, 20, 6 ] O(nLogn)
