import { useState } from "react";
import Button from "../assets/components/Elements/Button";
import CartProduct from "../assets/components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-2.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    name: "Sepatu lama",
    price: 2000000,
    image: "/images/shoes-2.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    name: "Sepatu lama",
    price: 3000000,
    image: "/images/shoes-2.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const deleteFromCart = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.qty > 1) {
        setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item)));
      } else {
        setCart(cart.filter((item) => item.id !== id));
      }
    }
  };

  return (
    <>
      <div className="flex justify-end h-15 bg-blue-800 text-white items-center px-10">
        {email}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5 gap-x-2">
        <div className="w-4/6 flex flex-wrap">
          {" "}
          {products.map((product) => (
            <CartProduct key={product.id}>
              <CartProduct.Header image={product.image}></CartProduct.Header>
              <CartProduct.Body name={product.name}>{product.description}</CartProduct.Body>
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
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                    <Button classname="bg-red-900" onClick={() => deleteFromCart(product.id)}>
                      Delete
                    </Button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
