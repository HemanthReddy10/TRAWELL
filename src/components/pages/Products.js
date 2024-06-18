import React from 'react';
import '../../App.css';
import './Products.css';
import ProductCarousel from './ProductCarousel';
import Footer from "../Footer";
export default function Products() {
  const productsData = [
    {
      title: "Dest 1",
      description: "Description of Dest 1",
      images: ["/images/img-1.jpg", "/images/img-2.jpg"],
    },
    {
      title: "Dest 2",
      description: "Description of Dest 2",
      images: ["/images/img-3.jpg", "/images/img-4.jpg"],
    },
    {
      title: "Dest 3",
      description: "Description of Dest 3",
      images: ["/images/img-5.jpg", "/images/img-6.jpg"],
    },
    {
      title: "Dest 4",
      description: "Description of Dest 4",
      images: ["/images/img-7.jpg", "/images/img-3.jpg"],
    },
    {
      title: "Dest 5",
      description: "Description of Dest 5",
      images: ["/images/img-8.jpg", "/images/img-4.jpg"],
    },
    {
      title: "Dest 6",
      description: "Description of Dest 6",
      images: ["/images/img-9.jpg", "/images/img-5.jpg"],
    },
  ];
  return <>
  <h1 className='products'>Famous Destinations</h1>;
  <div className="products-container">
      <h1>Our Destinations</h1>
      <br/>
      <div className="products-grid">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            <ProductCarousel images={product.images} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
}





