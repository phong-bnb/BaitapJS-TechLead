
function FindSpaceMax(arr){
    let count = 0
    const list = [...new Set(arr)]
    list.sort((a,b)=>{
        return a-b
    })
    let min = list[0];
    let max = list[list.length-1]
    count = max - min
    return count
    
}
module.exports=FindSpaceMax;