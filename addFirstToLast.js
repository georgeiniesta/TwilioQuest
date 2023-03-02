
function addFirstToLast(inputarray){
    let firstAndLast = "";
    if (inputarray.length > 0){
        //using index 0 as first element and pop to pop last arr ind//
        firstAndLast = inputarray[0]+inputarray.pop();
    }
    return firstAndLast;
}
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));