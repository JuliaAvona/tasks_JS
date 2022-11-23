let data = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5];


function dataReverse(data) {
  let newArr = [];
  let newArr2 = [];
  
  for (let i = 0; i < data.length; i += 8) {
    newArr.push(data.slice(i, i + 8));
  }

  for (let i = 0; i < newArr.length; i++) {
    newArr2 = [...newArr[i], ...newArr2]; 
  }
  
  return newArr2;
}