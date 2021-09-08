import './style.css'
import '../Product'
import { useState } from 'react'
function MenuContainer({product}){    
    const [currentSale, setCurrentSale] = useState([])
    const handleClick =(id)=>{
        const productFinded = product.find((item)=> item.id === id)
        productFinded !== undefined ? (setCurrentSale([...currentSale,productFinded])): (<h1>No find this product</h1>)

    }
    const valueAcurace =  currentSale.reduce((acc,item)=> acc + item.price, 0)
    
    return(
        <>
        <div className="carSale">
            <ul>
            {currentSale.map((product, index)=> <li  className="productSale" key={index}><p>{product.name}
             <span>{product.price}</span><span onClick={()=>handleClick(product.id)}>Buy</span></p></li>)}
             </ul>
             <span>Price:{parseFloat(valueAcurace.toFixed(2))}</span>
        </div>
        <ul className="allProduct">
            {product.map((product, index)=> <li  className="product" key={index}><p>{product.name}
             <span className="price">{product.price}</span><span className="buy" onClick={()=>handleClick(product.id)}>Buy</span></p></li>)}
         </ul>
        </>

    )


}
export default MenuContainer