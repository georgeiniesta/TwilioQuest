const firstVal = process.argv[2];
const secondVal = process.argv[3];

const firstValLow = firstVal.toLowerCase();
const secondValLow = secondVal.toLowerCase();

if (secondValLow > firstValLow){
    console.log(-1);
} else if (firstValLow==secondValLow){
    console.log(0);
}else if(firstValLow>secondValLow){
    console.log(1);
} else{
    console.log("");
}
