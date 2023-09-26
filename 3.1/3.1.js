/**
 * 
 * @param {array} arr 
 * @returns {number}
 */
function Findmin2(arr){
    const uniqueNumbers = [...new Set(arr)];
   arr.sort((a,b)=>{
        return a-b
    })
    const list = uniqueNumbers.filter((number,index)=>index===1)
    if (list.length === 1) {
        return list[0];
      } else {
        return null;
      }
}
module.exports=Findmin2;