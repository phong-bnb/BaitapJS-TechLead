let numberwin = 0;
function FindNumber(arr){
    for(const number of arr){
        if(number%3===0 && number%5===0){
            numberwin += number
        }
    }
    return numberwin
}
module.exports = FindNumber;