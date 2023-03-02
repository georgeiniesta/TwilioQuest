function transform(freightItems) {
    // This is an array variable you can override with your transformed array
    let transformedItems = [];
  
    /*
    Replace this comment with your code.
    Use the array map() function to replace transformedItems with a new array of
    strings from the input array that have been converted to ALL CAPS
    */
   
    //Using arrow function and toUpperCase
    return transformedItems = freightItems.map(item=> item.toUpperCase());
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const transformed = transform(["dog", "ray gun", "cat"]);
  console.log("Transformed Items");
  console.log(transformed); // should be ['DOG', 'CAT', 'ZIPPERS']