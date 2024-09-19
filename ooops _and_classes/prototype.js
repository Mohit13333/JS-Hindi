// let myName="Mohit      "
// console.log(myName.truelength)




let myHero=['thor', 'spiderman']
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`spidy power is: ${this.getSpiderPower}`)

    }
}
Array.prototype.heymohit=function(){
    console.log(`mohit says hello`)
}
Object.prototype.mohit=function(){
    console.log(`mohit is present in all object`)
}
heroPower.mohit()
myHero.mohit()
myHero.heymohit()
// heroPower.heymohit()
// heroPower.getSpiderPower()
const User={
    name:"chai",
    email:"help@example.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailble:false
}
const TaSupport={
    makeAssignment:'js assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User
Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUserNAme="chaiaur            "
String.prototype.trueLength=function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True Length is: ${this.trim().length}`)
}
anotherUserNAme.trueLength()
"mohit        ".trueLength()