const argVal=process.argv[2];
const enhancedTree = Number(argVal);

if (enhancedTree === 0 ){
    console.log('alive');
} else if (enhancedTree === 1 ) {
  console.log('flowering');  
} else if (enhancedTree === 2 ) {
    console.log('shedding');  
  } else {
    console.log('other');  
  }