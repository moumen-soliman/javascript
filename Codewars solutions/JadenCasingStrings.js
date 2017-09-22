//http://www.codewars.com/kata/5390bac347d09b7da40006f6
String.prototype.toJadenCase = function () {
  return this.split(' ').map(function (str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  }).join(' ');
};