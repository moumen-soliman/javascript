//https://www.codewars.com/kata/5656b6906de340bd1b0000ac
function longest(s1, s2) {
  var strArray,outArray;
  //Sort array by charcters and number by using sort()
  strArray = (s1+s2).split('').sort();
  outArray = [];
  
  for(var i=0;i<strArray.length;i++) {
    if (outArray.includes(strArray[i])) {
    }else{
        outArray.push(strArray[i]);
      }
  }
  
  return outArray.join('');

}