import React from 'react';
import '../../App.css';
import './Services.css';
import Footer from "../Footer";

export default function Services() {

const servicesData = [
  { title: "Service 1", description: "Description of service 1", icon: "🔧" },
  { title: "Service 2", description: "Description of service 2", icon: "⚙️" },
  { title: "Service 3", description: "Description of service 3", icon: "💻" },
];
  return <>
  <h1 className='services'>SERVICES</h1>;
  <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
<Footer/>
  </>
}


// Services.js




