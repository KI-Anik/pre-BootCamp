const obj = {
    name: 'Anik',
    age: 25,
    address: {
        zila: 'Faridpur',
        thana: 'Faridpur sadar'
    }
}

const {address, address :{zila : altName} } = obj
console.log(address,altName)