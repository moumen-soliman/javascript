//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(text){
  //we try to get duplicate charcter here , so use for to get text length number   
  var arr = [], dupArr = [];
  
  for(var i=0; i<text.length; i++) {
    var t = text[i].toLowerCase();
    
    if(arr.indexOf(t)<0){ 
      arr.push(t);
      } else if(dupArr.indexOf(t)<0){
      
      dupArr.push(t);
    }
  
  }
  
  return dupArr.length;
}