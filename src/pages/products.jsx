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
    id: 1,
    name: "Sepatu lama",
    price: "Rp. 1000.000",
    image: "/images/shoes-2.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5 gap-x-2">
      {products.map((product) => (
        <CartProduct>
          <CartProduct.Header image={product.image}></CartProduct.Header>
          <CartProduct.Body name={product.name}>{product.description}</CartProduct.Body>
          <CartProduct.Footer price={product.price}></CartProduct.Footer>
        </CartProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
