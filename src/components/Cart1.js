import React, { useState, useEffect } from "react";

const Cart1 = () => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts?userId=1")
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading cart data...</p>;

  return (
    <>
      <div className="pt-32 pb-12 lg:py-20 h-screen-[443px]">
        <div className="container mx-auto">
          <div style={{ padding: 20 }}>
            <h2>User 1 Cart</h2>
            {cartData.length === 0 ? (
              <p>No cart data found.</p>
            ) : (
              cartData.map((cart) => (
                <div key={cart.id} style={{ marginBottom: 20 }}>
                  <h3>Cart ID: {cart.id}</h3>
                  <p>Date: {cart.date}</p>
                  <ul>
                    {cart.products.map((product) => (
                      <li key={product.productId}>
                        Product ID: {product.productId}, Quantity:{" "}
                        {product.quantity}
                      </li>
                    ))}
                  </ul>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart1;
