//https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a,b,c)
{  
  //will use the math.max , to define who max value
  let max = Math.max(a, b, c);
  //it's equation to declare sum value , 
  //and use it in next line to check if (a,b,c) is triangel or not
  let sum = a + b + c;
  return sum - max > max;
  
}