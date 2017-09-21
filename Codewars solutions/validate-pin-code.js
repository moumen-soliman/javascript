//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
function validatePIN (pin) {
  //return true or false
  //ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
  //If the function is passed a valid PIN string, return true, else return false.
  if(pin.match(/^\d{4}$|^\d{6}$/) && (pin.length == 4 || pin.length == 6)){ 
        return true ;
   }else {
      return false;
  }
}