import './style.css'
import '../Product'
import { useState } from 'react'
function MenuContainer({ product }) {
    const [currentSale, setCurrentSale] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    const handleClick = (id) => {
        const productFinded = product.find((item) => item.id === id)
        const haveThisProduct = currentSale.find((item) => item.id === id)
        if (haveThisProduct === undefined) {
            productFinded !== undefined && setCurrentSale([...currentSale, productFinded])
            const acurace = currentSale.reduce((acc, item) => acc += item.price, productFinded.price)
            setCartTotal(acurace)
        } else {
            return (
                alert("This product is on the shopping list")
            )
        }

    }

    const filteredItem = (id) => {
        const filtered = currentSale.filter(item => item.id !== id)
        setCurrentSale(filtered)
        const proc = filtered.reduce((acc, item) => acc += item.price, 0)
        setCartTotal(proc)


    }


    return (
        <>
            <div className="carSale">
                <ul>
                    {currentSale.map((product, index) => <li className="productSale" key={index}><p>{product.name}
                        <span>{product.price}</span><span className="remove" onClick={() => filteredItem(product.id)}>X</span></p></li>)}
                </ul>

                <span>Subtotal:{cartTotal.toFixed(2)}</span>
            </div>
            <ul className="allProduct">
                {product.map((product, index) => <li className="product" key={index}><p>{product.name}
                    <span className="price">{product.price}</span><span className="buy" onClick={() => handleClick(product.id)}>Buy</span></p></li>)}
            </ul>
        </>

    )


}
export default MenuContainer