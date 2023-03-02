const lifestatus = Number(process.argv[2]);
const drynessLvl = Number(process.argv[3]);

if (lifestatus === 0 && drynessLvl > 10){
    console.log('WATER');
} else {
    console.log('');
}