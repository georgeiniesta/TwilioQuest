//We will map each item and sum the number of letters of the whole array
function calculateMass(freightItems){
    //let totalMass = 0;
    //We will pass freightItems and reduce it
    //we will reduce or add the lenght of each item
    //as we pass total and current we need to set up
    //current as 0 for the first sum, then we sum and accumulate
    return freightItems.reduce((total, current)=> total+current.length,0);
}

const mass = calculateMass(['dog','donkey','cat'])
//expected output 12
console.log('The total mass of items is: ' + mass );