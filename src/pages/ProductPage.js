// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function ProductPage() {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${productId}`)
//       .then(res => res.json())
//       .then(data => setProduct(data));
//   }, [productId]);

//   if (!product) return <p>Loading product...</p>;

//   return (
//     <div style={{ marginTop: '30px' }}>
//       <button onClick={() => navigate(-1)}>← Back</button>
//       <h2>{product.title}</h2>
//       <img src={product.image} alt={product.title} width="150" />
//       <p>{product.description}</p>
//       <p><strong>Price:</strong> ${product.price}</p>
//     </div>
//   );
// }

// export default ProductPage;
