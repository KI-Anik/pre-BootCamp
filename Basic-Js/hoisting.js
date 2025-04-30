console.log(a)
var a =10 // global scoped

one() // downLiftion is called hoisting
function one() {
    console.log('one')
}

let b //reAssignable and blocked scope
b=100
b=50
console.log(b)
