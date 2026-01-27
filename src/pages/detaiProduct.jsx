import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import CartProduct from "../assets/components/Fragments/CardProduct";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CartProduct>
        <CartProduct.Header image={product.image} />
        <CartProduct.Body name={product.title}>{product.description}</CartProduct.Body>
        <CartProduct.Footer price={product.price} />
      </CartProduct>
    </div>
  );
};

export default DetailProductPage;
