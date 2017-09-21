//https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
 //The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
  var n = 0;
  while (m > 0) {
    n=n+1;
    m=m-Math.pow(n,3); 
  }
  return m ? -1 : n;
}