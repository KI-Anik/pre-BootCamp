const fruits = ['mango', 'jackFruit', 'orange']

fruits.forEach(fruit => {
    const newFruit = `i am eating ${fruit}`
    // console.log(newFruit)
})


const frt = fruits.map(fr=>{
    const newfrt = `plese give me a ${fr}`
    return newfrt
})
// console.log(frt)

// -----------------

const numbers = [1,3,5,7,9]
console.log(numbers.find(num=> num<5))

// console.log(numbers.filter(number=> number>=5 ).map(num=> num+2).reduce((acc, curr)=> acc + curr) ) 
// [5, 7, 9] --> [7, 9, 11] --> (by default acc = 0) 0 + 7 = 7 + 9 = 16 +11

const calculate = numbers.reduce((total, bill)=> total + bill)
console.log(calculate)
