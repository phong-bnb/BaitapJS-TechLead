/**
 * 
 * @param {array} arr 
 * @param {number} count 
 * @param {number} median1
 * @param {number} median2
 
 * @returns {number} 
 */
function Median(arr){
    arr.sort((a,b)=>{
        return a-b ;
    })
    const count = Math.floor(arr.length / 2);
        if(arr.length %2===0){
            const median1 = arr[count - 1];
            const median2 = arr[count];
            const mediannumber = (median1 + median2) / 2;
            return mediannumber;
        } else {
            const mediannumber = arr[count];
            return mediannumber;
        }
    }

module.exports = Median;