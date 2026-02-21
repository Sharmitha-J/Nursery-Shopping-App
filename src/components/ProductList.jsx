import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';
import CartItem from './CartItem';

const ProductList = () => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        { name: "Snake Plant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG5Rd-XtW35QysnW_HigoJboEhEl25Uvfag&s", cost: 15 },
        { name: "Spider Plant", image: "https://i0.wp.com/buygreen.in/wp-content/uploads/2023/11/IMG_20231121_092229667_HDR_AE.jpg?fit=1000%2C1356&ssl=1", cost: 12 },
        { name: "Peace Lily", image: "https://m.media-amazon.com/images/I/51TV6W-ETmL._AC_UF1000,1000_QL80_.jpg", cost: 18 }
      ]
    },
    {
      category: "Aromatic",
      plants: [
        { name: "Lavender", image: "https://m.media-amazon.com/images/I/61sWO1hLXDL._AC_UF1000,1000_QL80_.jpg", cost: 20 },
        { name: "Rosemary", image: "https://m.media-amazon.com/images/I/71oNAy9hNpL._AC_UF1000,1000_QL80_.jpg", cost: 14 },
        { name: "Mint", image: "https://media.istockphoto.com/id/478775140/photo/fresh-mint-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=6Prm-8OtMLpP3avlUnYlCU_oY5Jyq9ls8Rr4grdSNCo=", cost: 10 }
      ]
    },
    {
      category: "Low Maintenance",
      plants: [
        { name: "Pothos", image: "https://media.istockphoto.com/id/2170686151/photo/pothos-houseplant-in-a-flower-pot-epipremnum-aureum.jpg?s=612x612&w=0&k=20&c=is7kql6aKL6oltIUZnBF_yYCPmjEB9D6J2BxigbSCqs=", cost: 12 },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600", cost: 16 },
        { name: "ZZ Plant", image: "https://media.istockphoto.com/id/2158516111/photo/zz-plant-in-a-gray-pot.jpg?s=612x612&w=0&k=20&c=LwA2mQerSqgfxlOsU0iFdtxxyaTajJp3ztNTt3hA_38=", cost: 22 }
      ]
    }
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo" onClick={() => window.location.reload()}>
          <img src="https://cdn-icons-png.flaticon.com/512/628/628283.png" alt="logo" style={{width:'45px'}} />
          <span>Paradise Nursery</span>
        </div>
        <div className="nav-links">
          <button className="nav-link-item" onClick={() => setShowCart(false)}>
            🌿 Plants
          </button>
          <button className="cart-icon" onClick={() => setShowCart(true)}>
            🛒 Cart <span className="cart-quantity-count">{totalQuantity}</span>
          </button>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryGroup, index) => (
            <div key={index} className="category-section">
              <h3 className="category-title">{categoryGroup.category}</h3>
              <div className="plants-container">
                {categoryGroup.plants.map((plant, plantIndex) => (
                  <div className="plant-card" key={plantIndex}>
                    <div className="sale-tag">SALE</div>
                    <img src={plant.image} alt={plant.name} />
                    <h4>{plant.name}</h4>
                    <p className="plant-price">${plant.cost}</p>
                    <button 
                      className="add-to-cart-btn"
                      disabled={cart.some(item => item.name === plant.name)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {cart.some(item => item.name === plant.name) ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
};

export default ProductList;