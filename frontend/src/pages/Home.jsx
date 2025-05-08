import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Dữ liệu mẫu cho các sản phẩm ghế
  const products = [
    {
      id: 1,
      name: 'Abingdon Upholstered Chair Swivel',
      price: 151,
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Jeses Minimore Modern Style Etta',
      price: 181,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'JJeses Minimore Modern Style',
      price: 201,
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Wooden Armchair Black',
      price: 175,
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'Modern Black Armchair',
      price: 195,
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'Wooden Frame Black Chair',
      price: 165,
      image: '/api/placeholder/300/300'
    },
    ,
    {
      id: 6,
      name: 'Wooden Frame Black Chair',
      price: 165,
      image: '/api/placeholder/300/300'
    },
  ];

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới với số lượng là 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    // Mở giỏ hàng khi thêm sản phẩm
    setIsCartOpen(true);
  };

  // Hàm giảm số lượng sản phẩm trong giỏ hàng
  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: Math.max(1, item.quantity - 1) };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Hàm tăng số lượng sản phẩm trong giỏ hàng
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Đóng/mở giỏ hàng
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={styles.container}>
      {/* Header với biểu tượng giỏ hàng */}
      <header className={styles.header}>
        <h1>Furniture Store</h1>
        <div className={styles.cartIcon} onClick={toggleCart}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M4 4h2v2h12V4h2v2h1v15H3V6h1V4zm0 4v13h16V8H4z"/>
            <path d="M8 10h8v2H8z"/>
          </svg>
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </div>
      </header>

      {/* Danh sách sản phẩm */}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img 
                src={product.image} 
                alt={product.name} 
                className={styles.productImage} 
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>${product.price}</p>
              <button 
                className={styles.addToCartButton}
                onClick={() => addToCart(product)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M4 4h2v2h12V4h2v2h1v15H3V6h1V4zm0 4v13h16V8H4z"/>
                  <path d="M8 10h8v2H8z"/>
                </svg>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Giỏ hàng */}
      <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ''}`}>
        <div className={styles.cartHeader}>
          <h2>Shopping Cart</h2>
        </div>
        
        {cartItems.length > 0 ? (
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.cartItemInfo}>
                  <h3>{item.name}</h3>
                  <p className={styles.cartItemPrice}>${item.price}</p>
                </div>
                <div className={styles.cartItemQuantity}>
                  <button 
                    className={styles.quantityButton} 
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className={styles.quantityButton} 
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            
            <div className={styles.cartFooter}>
              <button className={styles.closeButton} onClick={() => setIsCartOpen(false)}>
                CLOSE
              </button>
              <button className={styles.checkoutButton}>
                CHECKOUT
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
      
      {/* Overlay cho giỏ hàng khi mở */}
      {isCartOpen && <div className={styles.overlay} onClick={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default Home;