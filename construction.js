function construct(name){
    let person = {};
    person.name=name;
    person.material='human';
    person.assemble=true;
    person.duration=1000;

    return person;
}
const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // should be "Kevin"
console.log('duration is: ' + somePerson.duration); // should be 1000