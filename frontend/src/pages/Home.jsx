import React from 'react';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';

function Home() {
    // Dữ liệu mẫu cho các sản phẩm
    const products = [
        {
            id: 1,
            name: 'Áo Thun Basic',
            quantity: 20,
            image: '/api/placeholder/300/300'
        },
        {
            id: 2,
            name: 'Quần Jeans Nam',
            quantity: 15,
            image: '/api/placeholder/300/300'
        },
        {
            id: 3,
            name: 'Giày Thể Thao',
            quantity: 10,
            image: '/api/placeholder/300/300'
        },
        {
            id: 4,
            name: 'Túi Xách Nữ',
            quantity: 12,
            image: '/api/placeholder/300/300'
        },
        {
            id: 5,
            name: 'Mũ Lưỡi Trai',
            quantity: 30,
            image: '/api/placeholder/300/300'
        },
        {
            id: 6,
            name: 'Đồng Hồ Thông Minh',
            quantity: 8,
            image: '/api/placeholder/300/300'
        },
    ];

    const handleUse = (productId) => {
        console.log(`Sử dụng sản phẩm có ID: ${productId}`);
        // Thêm logic xử lý khi nhấn nút "Sử dụng" tại đây
    };

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Danh Sách Sản Phẩm</h1>
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
                                <p className={styles.productQuantity}>
                                    Số lượng: <span>{product.quantity}</span>
                                </p>
                                <button
                                    className={styles.useButton}
                                    onClick={() => handleUse(product.id)}
                                >
                                    Sử dụng
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;