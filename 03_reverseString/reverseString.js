const reverseString = function(str) {
    let revstr = "";
    revstr = str.split('').reverse().join('');
    return revstr;
};

// Do not edit below this line
module.exports = reverseString;
