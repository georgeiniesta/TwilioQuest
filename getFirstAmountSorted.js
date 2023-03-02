function getFirstAmountSorted(inputArray, numberOfItems){
    //sorting elements of Array
    const newArray = inputArray.sort();
    //count num of indx array and return new array
    //We first sort the Array, then slice the array
    return (newArray.slice(numberOfItems.length));
}

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);