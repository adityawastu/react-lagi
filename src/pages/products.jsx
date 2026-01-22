import Button from "../assets/components/Elements/Button";
import CartProduct from "../assets/components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1000.000",
    image: "/images/shoes-2.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    name: "Sepatu lama",
    price: "Rp. 1000.000",
    image: "/images/shoes-2.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {products.map((product) => (
          <CartProduct key={product.id}>
            <CartProduct.Header image={product.image}></CartProduct.Header>
            <CartProduct.Body name={product.name}>{product.description}</CartProduct.Body>
            <CartProduct.Footer price={product.price}></CartProduct.Footer>
          </CartProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
