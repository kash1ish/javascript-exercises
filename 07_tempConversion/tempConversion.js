const convertToCelsius = function(num) {
  let newnum ;
  newnum =((num-32)*5/9);
  return newnum;
};

const convertToFahrenheit = function(num) {
  let newnum2;
  newnum2 =(num * 9/5) + 32 ;
  return newnum2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
