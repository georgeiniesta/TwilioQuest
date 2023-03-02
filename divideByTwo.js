// Read value passed by, it uses argv that returns array containing arguments passed in
const argVal = process.argv[2];
// Convert it to number
const numVal = Number(argVal);
//Dividing by two
const result = numVal/2;
console.log(result);