/**
 * 
 * @param {array} arr 
 * @param {number} stt
 * @returns {number} 
 */
function FindNumberCongBang(arr,stt){
    let count = 0 
    for(let i = 0; i<arr.length;i++){
        for(let j = i+1; j<arr.length;j++){
            console.log(arr[i]+arr[j])
            if(arr[i]+arr[j]===stt){
                count++
            }
        }
    }
    return count

}
module.exports=FindNumberCongBang;