function scan(freightItems){
    let contrabandIndexes =[];
    //using forEach to loop through the whole array
    //create function using element and index
    // check if element has 'contraband', push to empty arr contrabandindexes the index found
    freightItems.forEach(function(element,index){
        if(element=='contraband'){
            contrabandIndexes.push(index);
        }
    })
    return contrabandIndexes;
}
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]