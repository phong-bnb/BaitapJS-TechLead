/**
 * 
 * @param {string} string 
 * @param {number} lenghtmax
 * @param {wordlengthMax} string
 * @returns {string}
 */
function FindString(string){
let SplitString = string.split(' ')
let lenghtmax = 0;
let wordlengthMax = ''
for(const word of SplitString){
    if(lenghtmax<=word.length){
        lenghtmax = word.length
       wordlengthMax = word
    }
}
return wordlengthMax
}
module.exports=FindString;