let id=10
let name ="Malavika"
let dreams =["Actor","Dancer"]
let isMalu = true
isMalu = "yes"
let obj = {Name: "Malavika", Id:10}
let sad = "let no"
if(true){
   let sad = "let yes"
}
var happy = "var no"
if(true){
   var newed = "var yes"
}
console.log("id=",id)
console.log("name=",name)
console.log("dreams=",dreams)
console.log("isMalu=",isMalu)
console.log("obj=",obj)
console.log("happy=",newed)
console.log("sad=",sad)

dreams.forEach(x=>console.log(x));

dreams.forEach(x=>{
    console.log("each loop",x)
});

dreams.forEach(function(x){console.log(x)}
)

const list = [1,2,3,4,5,6,7,8,9,10]

console.log("even numbers",list.filter(x=>(x%2==0)))

let obj1 = {id: 1, name: "Malu", isHappy: true}
let obj2 = {isSad: false}
let obj3 = {...obj2, place: "Pettah"}

console.log("Object 3 is",obj3);



