const argVal = process.argv[2];
const treeLifeStatus = Number(argVal);
if (treeLifeStatus=== 0){
    console.log('alive');
} else{
    console.log('other');
}