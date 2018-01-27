//Promises (like callbacks) allow us to wait on certain code to finish execution prior to running the next bit of code.

new Promise( (resolve, reject) => {
  setTimeout(() => resolve(1), 2000);

}).then((result) => {
  alert(result);
  return result + 2;
}).then((result) => {
  alert(result);
  return result + 2;
}).then((result) => {
  alert(result);
  return result + 2;
});


//Prmoises with throw err

new Promise( (resolve, reject) => {
  setTimeout(() => resolve(1), 2000);

}).then((result) => {
  alert(result);
  return result + 2;
}).then((result) => {
  throw new Error('FAILED HERE');
  alert(result);
  return result + 2;
}).then((result) => {
  alert(result);
  return result + 2;
}).catch((e) => {
  console.log('error: ', e)
});