const numInput = Number(process.argv[2]);
let output='';
if (numInput%3==0 && numInput%5==0){
    output += 'JavaScript';
} else if (numInput % 5==0){
    output += 'Script';
} else if (numInput % 3==0){
    output +=  'Java';
} else {
    output += numInput;
}

console.log(output);