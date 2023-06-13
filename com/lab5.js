let arr = [1, 50, 40, 3, 10];
function sum(arr) {
  return arr.filter(element => element > 20).reduce((acc, curr) => acc + curr, 0);
}


let arr2 = ['Mohamed', 'Ahmed', 'Abdelrahman', 'Khaled'];
const getNewArray = function(arr) {
  return arr2.filter(element => element.length >= 5 && element.includes('a'));
};

