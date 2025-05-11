const arr = [2,5,4,8,9]

const arr2 = [4,5,...arr,3,6]

const arrcp = [...arr2] //cloning 

const arr3 = arrcp.map(element=> element*2)
// console.log(arr3)

// rest

const arrfn = (...params)=>{
    let a = params
    return a
}

console.log(arrfn(1,2,3))