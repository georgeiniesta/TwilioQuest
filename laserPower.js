function calculatePower(powerSettings){
    //use map to loop through, then define function(item){item*2]}
    //we pass item and multiply it
    let multiplyByTwo = powerSettings.map(item=>item*2);

    return totalPower = multiplyByTwo.reduce((sum,item)=>sum+item,0);
}

const laserPower = calculatePower([1,3,8]);
console.log('Required laser power is '+ laserPower);