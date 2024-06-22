// Asynchronous programing
console.log(1)
console.log(2)
setTimeout (function() {
    console.log(3)
},1000)
console.log(4)


// callback
let prepareTea = (taskName:string,delay:number,cb:() => void ) =>{
setTimeout (()=> {
    console.log(taskName)
    
    cb()
},delay)
}

prepareTea("add water",0,() => {
prepareTea("add tea",1000,() => {
    console.log("fantastic tea")
})    
})