const marvel = ["thor", "Iornman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc); //array inside array
// console.log(marvel);
// console.log(marvel[2][1]);

// const all = marvel.concat(dc);
// console.log(all);

//spread operator ...
// console.log(...marvel);
// const allHeros = [...marvel, ...dc];
// console.log(allHeros);

// const anotherArr = [1, 2, 3, 4, [5, 6, 7], [8, [9, 10]], 11];
// const real_anotherArr = anotherArr.flat(Infinity);
// console.log(real_anotherArr);

console.log(Array.isArray("shruti"));
console.log(Array.from("shruti"));
console.log(Array.from({name:"shruti"})); //intresting interview question, its not able to convert it to array that's why returning empty array.

const v1 = 10;
const v2 = 20;
const v3 = 30;

console.log(Array.of(v1, v2, v3));






