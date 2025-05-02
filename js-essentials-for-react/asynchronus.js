function fetchData(callback) {
    setTimeout(() => {
        callback('data successfull')
    }, 2000);
}
// fetchData((dt) => console.log(dt)) // can't understand this line


function fetchData1(){
    return new Promise((resolve, reject)=>{
        resolve('promise resolved')
    })
}

fetchData1().then(data=>console.log(data))

