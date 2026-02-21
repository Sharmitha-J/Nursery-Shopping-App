import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-wrapper">
            {/* Left Side: Identity */}
            <div className="landing-left">
              <div className="landing-identity">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/628/628283.png" 
                  alt="logo" 
                  className="company-logo-main" 
                />
                <h1>Paradise Nursery</h1>
                <div className="divider"></div>
                <p>Where Every Leaf Tells a Story</p>
                <button className="get-started-btn" onClick={handleGetStartedClick}>
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Side: About Us Description */}
            <div className="landing-right">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;