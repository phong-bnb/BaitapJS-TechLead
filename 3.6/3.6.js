function Findtb2arr(arr1,arr2){
    hihi = [...arr2,...arr1]
    let count = 0 ;
    let tb = 0; 
    let lengthtb = hihi.length
    for(let i=0;i<lengthtb;i++){
      count+=hihi[i]
 tb =  count/lengthtb
    }
return tb 
}
module.exports = Findtb2arr;