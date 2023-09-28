/**
 * 
 * @param {array} arr 
 * @returns {array}
 */
function SortStringLength(arr) {
  
    function FindLenghString(a, b) {
      return b.length - a.length;
    }
  
    arr.sort(FindLenghString); // Sắp xếp theo độ dài giảm dần
  
    // Sắp xếp lại mảng theo số từ riêng biệt trong mỗi chuỗi
    arr.sort((a, b) => {
      const uniqueNumbersA = new Set(a.match(/\d+/g) || []);
      const uniqueNumbersB = new Set(b.match(/\d+/g) || []);
      
      if (uniqueNumbersA.size === uniqueNumbersB.size) {
        return 0;
      } else if (uniqueNumbersA.size < uniqueNumbersB.size) {
        return 1; // Đổi chỗ nếu chuỗi B có nhiều số hơn
      } else {
        return -1; // Giữ nguyên nếu chuỗi A có nhiều số hơn
      }
    });
  
    return arr;
  }
  
  
  
 
  module.exports = SortStringLength