const name="mohit"
const repoCount=50
// console.log(name+repoCount+ " value")
// string interpolation
console.log(`hello may name is ${name} and repo count is ${repoCount}`);
const gameName=new String('mohit-m-p m')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // in this possion what char is
console.log(gameName.indexOf('h')); // char at which possion is
const newgameName = gameName.substring(-8,4);
console.log(newgameName);
const anotherstring=gameName.slice(-8,4);
console.log(anotherstring);
const newStringOne="    mohit    "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="hhtps://mohit.com/mohit singh"
console.log(url.replace(' ','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-, '))
