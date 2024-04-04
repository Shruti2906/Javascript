const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.map((num) => num+10);

console.log(newNums);

//filter vs map
//filter returns only array
// values that satisfy the
// consdition..ehich is not 
// the case in map

// ++++++++++ chaining
const newNum2 = nums
                .map((num) => num*10)
                .map((num) => num+1)   //here values of num will be the ones which are retuned by previous map.
                .filter((num) => num>10);

console.log(newNum2);



//map iterates over iterables and returns the resultant array.
//filer returns only those values which match the conditions