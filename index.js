const { sum ,concat } = require('./utilities/one.js');
const util=require('./utilities/tow')

const arr = [1,2,3,4,5,6];
const arr2=[10,9,50,20,30];

console.log('sum=',sum(arr));
console.log('the Concatenate of two arrays',concat(arr,arr2));

console.log('the largest number=',util.lgNum(arr));
console.log('the array=',util.cut3(arr2));