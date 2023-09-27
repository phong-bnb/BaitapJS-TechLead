function countSameString(string1, string2){
    let count = 0;
    for(let i=0;i<string1.length;i++){
        if(string1[i] && string2.includes(string1[i])){
            count++
        }
    }
    return count;
}


function Findtrungnhau(arr) {
    let longestCommon = [];
    let maxLength = 0;
     for(let i= 0; i< arr.length;i++){
        for(let j = 1; j < arr.length;j++){
            let count = countSameString(arr[i],arr[j]);
            if(count > maxLength && arr[i] !== arr[j]){
                maxLength = count;
                longestCommon = [arr[i],arr[j]]
            }
        }
     }
     console.log(longestCommon)
     return longestCommon;
  }
  
  module.exports = Findtrungnhau;
  