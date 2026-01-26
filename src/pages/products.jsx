/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import Button from "../assets/components/Elements/Button";
import CartProduct from "../assets/components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

const token = localStorage.getItem("token");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  //use reff
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

  return (
    <>
      <div className="flex justify-end h-15 bg-blue-800 text-white items-center px-10">
        {username}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5 gap-x-2">
        <div className="w-4/6 flex flex-wrap">
          {" "}
          {products.length > 0 &&
            products.map((product) => (
              <CartProduct key={product.id}>
                <CartProduct.Header image={product.image}></CartProduct.Header>
                <CartProduct.Body name={product.title}>{product.description}</CartProduct.Body>
                <CartProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                ></CartProduct.Footer>
              </CartProduct>
            ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}</td>
                      <td>
                        {product.price.toLocaleString("USD", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("USD", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {totalPrice.toLocaleString("USD", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
