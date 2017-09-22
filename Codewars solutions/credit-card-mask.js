//https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
  var str = cc;
  var subst = `#`;
  var regex = /.(?=.{4})/g;
  var result = str.replace(regex, subst);
  return result;
}