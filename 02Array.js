const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// let mArr=marvel_heroes.concat(dc_heroes)
// console.log(mArr);
const aal_new_heroes=[...marvel_heroes,...dc_heroes];//spread operator
// console.log(aal_new_heroes);
// const an_array=[1,2,3,,[4,5,6,7],7,[6,7,[4,5]]]
// const real_arr=an_array.flat(Infinity)
// console.log(real_arr);
console.log(Array.isArray("Mohit"));
console.log(Array.from("Mohit"));
console.log(Array.from({name:"Mohit"}));//intresting
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));