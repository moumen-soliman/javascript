//https://www.codewars.com/kata/583203e6eb35d7980400002a
function countSmileys(arr) {
  var smileTest = arr.filter(a=>/[:|;][\-|\~]?[)|D]/.test(a));
  var countSmile = smileTest.length;
  return countSmile;
}