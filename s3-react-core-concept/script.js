const quantityElement = document.getElementById('quantity')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const total = document.getElementById('total')

const price = 20;
let quantity = 1

increase.addEventListener('click', ()=>{
    quantity++
    quantityElement.innerText = quantity;
    total.innerText = price * quantity
})

decrease.addEventListener('click', ()=>{
   if(quantity >1 ){
    quantity--;
    quantityElement.innerText = quantity;
    total.innerText = price * quantity
   }else{
    alert('quantity at least 1')
   }
})