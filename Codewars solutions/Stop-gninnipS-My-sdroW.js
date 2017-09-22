//http://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(word) {
    return word.split(' ')
        .map(function (x) {
            if (x.length >= 5) {
                return x.split("").reverse().join("")
            }
            return x
        }).join(' ')
}