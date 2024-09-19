const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'Ruby',
}
for (const key in myObject) {
    // console.log(myObject[key])
    console.log(`${key} shortcut is for ${myObject[key]}`);
}const programing=['js', 'cpp', 'rb','py','java']
for (const key in programing) {
    console.log(`${key} key is for ${programing[key]}`)

}
// const map=new Map();
// map.set('IN','India')
// map.set('USA','United States Of America')
// map.set('FR','France')
// map.set('UK','United Kingdom')
// for (const key in map) {
//       console.log(key)
// }
