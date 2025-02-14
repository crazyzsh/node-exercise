const a = () => {
  console.log('hello');
}
new Promise((resolve, reject) => {
  resolve('hello');
});
const arr = [1, 2, 3];
const arr2 = arr.findLastIndex(item => item > 2)
const arr3 = arr.forEach(item => item > 2)
// console.log(arr2)