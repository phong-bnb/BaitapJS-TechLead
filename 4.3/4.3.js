function FindAB(arr) {
    if (!arr || arr.length === 0) {
      return 0;
    }
  
    let ketQua = 0;
    const chuoiDauTien = arr[0];
  
    for (let k = 0; k <= chuoiDauTien.length; k++) {
      for (let i = 0; i <= chuoiDauTien.length - k; i++) {
        const chuoiCon = chuoiDauTien.substr(i, k);
        let coTrongTatCaChuoi = true;
  
        for (let j = 1; j < arr.length; j++) {
          if (arr[j].indexOf(chuoiCon) === -1) {
            coTrongTatCaChuoi = false;
            break;
          }
        }
  
        if (coTrongTatCaChuoi) {
          ketQua = Math.max(ketQua, k);
        }
      }
    }
  
    return ketQua;
  }
  
 

  module.exports= doDaiChuoiChungDaiNhat;