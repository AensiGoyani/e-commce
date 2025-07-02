import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { BsBag } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, product.id);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image, category } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen-[443px] items-center">
      <div className="container mx-auto">
        {showAlert && (
          <div className="mt-4 px-4 py-3 flex items-center gap-4  bg-green-100 text-green-800 border border-green-300 rounded mb-3">
            <BsBag /> Product added to cart!
          </div>
        )}
        <div className=" flex  lg:flex-row items-center md:justify-between mt-3">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              src={image}
              className="max-w-[200px] max-h-[400px] lg:max-w-sm "
            />
          </div>
          <div className="flex-1 text-center lg:text-left ">
            <div className="mb-4 uppercase text-gray-500 text-lg">
              <h1>{category}</h1>
            </div>
            <h1 className="text-[30px] font-medium mb-2 max-w-[590px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-2xl text-red-500 font-bold mb-6">
              $ {price}
            </div>
            <p className="mb-8 pr-6 leading-7 max-w-[590px]">{description}</p>

            <div>
              <div onClick={handleAddToCart}>
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="bg-black text-white py-4 px-8"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
