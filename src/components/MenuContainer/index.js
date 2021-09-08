import './style.css'
import '../Product'
import { useState } from 'react'
function MenuContainer({product}){    
    const [currentSale, setCurrentSale] = useState([])
    const [cartTotal, setCartTotal] = useState(0)


    const handleClick =(id)=>{
        const productFinded = product.find((item)=> item.id === id)
        productFinded !== undefined ? (setCurrentSale([...currentSale,productFinded])): (<h1>No find this product</h1>)
        const acurace = (currentSale.reduce((acc,item)=> acc += item.price, productFinded.price))
        setCartTotal(acurace)
    }
    
    
    return(
        <>
        <div className="carSale">
            <ul>
            {currentSale.map((product, index)=> <li  className="productSale" key={index}><p>{product.name}
             <span>{product.price}</span><span onClick={()=>handleClick(product.id)}>Buy</span></p></li>)}
             </ul>

             <span>Price:{cartTotal}</span>
        </div>
        <ul className="allProduct">
            {product.map((product, index)=> <li  className="product" key={index}><p>{product.name}
             <span className="price">{product.price}</span><span className="buy" onClick={()=>handleClick(product.id)}>Buy</span></p></li>)}
         </ul>
        </>

    )


}
export default MenuContainer