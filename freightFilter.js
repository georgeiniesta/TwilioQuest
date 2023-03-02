function scanAndFilter (freightItems, forbiddenString){
    //creating empty array to filter
    let filteredItems = [];
    //using arrow funtion for this example
    // function(item){forbiddenString !==item]}
    //return array and filtering using .filter of the first array we pass, using 2nd array as filter 
    return filteredItems=freightItems.filter(item => (forbiddenString !==item))


}
// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
  );
  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']