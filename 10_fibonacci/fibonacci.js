const fibonacci = function(count) {
    const array = [0,1];
    for(let i = 2; i<=count; i++){
        array[i]= array[i-1] + array[i-2];
    }
    return array[count];
};

// Do not edit below this line
module.exports = fibonacci;
