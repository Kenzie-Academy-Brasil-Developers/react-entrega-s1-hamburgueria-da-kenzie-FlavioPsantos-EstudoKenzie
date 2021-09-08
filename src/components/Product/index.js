import { useState } from "react";
import MenuContainer from "../MenuContainer";
function Product() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [userText, setUserText] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);
  const ShowProducts = products.filter((item) => item.name.includes(userText));

  return (
    <>
    <div className="search">
      <form className="formulario">
        <input
          type="text"
          value={userText}
          onChange={(event) => setUserText(event.target.value)}
        ></input>
      </form>
      <button
        onClick={() => {
          setFilteredProducts(ShowProducts);
        }}

      >
        Buscar
      </button>
      </div>
      {filteredProducts.length === 0 ? (
        <MenuContainer product={products} />
      ) : (
        <MenuContainer product={filteredProducts} />
      )}

    </>

  );
}
export default Product;
