const coding = ["js", "ruby", 'java', "python", "cpp"];

// const val = coding.forEach((item)=>{
//     console.log(item);
//     return item;    //forEach does not return anything, whether use return or not.
// })
// console.log(val);

const nums = [1, 2, 3, 4 ,5, 6, 7, 8];

// Returns the elements of an array that meet the condition specified in a callback function.
// nums.filter(() => {});   
// nums.filter(() => ());   //implicit return 
    // console.log(nums.filter((num) => num>4));

// Remember this will return []:=
// console.log(nums.filter((num) => {num>4})); //as we are using {} so have explicitly return value 

const newNum = nums.filter((num) => {return num>4});
console.log(newNum);

//same result using forEach method
let newNum2 = []
nums.forEach((n) => {
    if(n>4){
        newNum2.push(n);
    }
});
// console.log(newNum2);

const books = [
    {title: 'Book one', genre: 'Fiction', publish: 1981},
    {title: 'Book two', genre: 'History', publish: 2016},
    {title: 'Book three', genre: 'Fiction', publish: 1981},
    {title: 'Book four', genre: 'Science', publish: 2018},
]

// const userBooks = books.filter((bk) => bk["genre"]==='Fiction');


const userBooks = books.filter((bk) => {return (bk.publish>2000 && bk.genre==='Science')});

console.log(userBooks);

// +++++++++++++++++++++++++++++


