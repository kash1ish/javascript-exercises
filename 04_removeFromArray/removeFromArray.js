const removeFromArray = function(arr,...myArgs) {
    const newArray = [];
    arr.forEach(element => {
        if(!myArgs.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
