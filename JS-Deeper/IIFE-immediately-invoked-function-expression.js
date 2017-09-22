function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game(); //use invoke


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();//use invoke



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);//use invoke
