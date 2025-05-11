const greeting=(name = 'next level')=>{ 
return `My name is ${name}`
}

// const result = greeting('Anik')
const result = greeting() //output: default params
console.log(result)