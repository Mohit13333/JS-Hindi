// const myNums=[1,2,3]
// const myTotal=myNums.reduce((acc,curval)=>{
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc + curval
// },0)
// console.log(myTotal)
// const myTotal=myNums.reduce((acc,curval)=>acc+curval,0)
    // console.log(`acc: ${acc} and curval: ${curval}`)

// console.log(myTotal)
const shoppingCart=[
    {
        itemName:"js courese",
        price: 2999
    },
    {
        itemName:"py courese",
        price: 2999
    },
    {
        itemName:"webdev courese",
        price: 2999
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)