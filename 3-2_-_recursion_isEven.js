function isEven(n){
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n)
  else return isEven(n-2)
}
console.log(isEven(-2));


//0 is even
//1 is odd
//For any other number N, its evenness is the same as N - 2.
// teste ob 1 oder 0, wenn nicht, -2 recursion
//
// falls <0, dann +2 recusion