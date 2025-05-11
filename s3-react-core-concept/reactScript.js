// const p = document.createElement('p')
// p.textContent = 'hello from reactScript'

// const root = document.getElementById('root').appendChild(p)

// const myElement = React.createElement('h1', null, 'hello, world!')
// ReactDOM.createRoot(document.getElementById('root')).render(myElement)

const NextLevel = () =>{
    const price = 20;
    const [quantity, setQuantity] = React.useState(1)
    const total = price * quantity


    return (
        <div class="bg-white shadow-lg rounded-xl p-6 w-80" id="productCard">
        <h2 class="text-xl font-semibold mb-2">Next Level T-Shirt</h2>
        <p class="text-gray-600 mb-2">Price: $<span id="price">{price}</span></p>

        <div class="flex items-center gap-4 mb-2">
            <button id="decrease" onClick={()=> setQuantity(quantity - 1)} class="bg-red-500 text-white px-2 py-1 rounded">−</button>
            <span id="quantity" class="text-lg font-bold">{quantity}</span>
            <button id="increase" onClick={()=>setQuantity(quantity + 1)} class="bg-green-500 text-white px-2 py-1 rounded">+</button>
        </div>

        <p class="font-semibold">
            Total: $<span id="total">{total}</span>
        </p>
    </div>
    )
} 

ReactDOM.createRoot(document.getElementById('root')).render(<>
<NextLevel></NextLevel> <br></br>
<NextLevel></NextLevel> <br></br>
<NextLevel></NextLevel>
</>)