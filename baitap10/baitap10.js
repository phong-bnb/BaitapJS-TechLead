/**
 * 
 * @param {array} arr 
 * @returns {number}
 */
function FindA(arr){
const List = arr.split(' ');
let count = 0;
for(let i=0;i<List.length;i++){
    if(List[i].includes('a')){
 count++
    }
}
return count;

}
module.exports=FindA;