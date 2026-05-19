import { useEffect, useState } from 'react';
import { productAPI } from '../services/api';
import '../styles/ProductCatalog.css';

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productAPI.getAll();
        setProducts(res.data);
      } catch (err) {
        console.error('Lỗi tải danh sách:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="catalog-loading">Đang tải bộ sưu tập...</div>;
  }

  return (
    <div className="product-catalog">
      <h1 className="catalog-title">
        Chào mừng đến với shop - Bộ sưu tập sản phẩm của chúng tôi
      </h1>

      <div className="catalog-grid">
        {products.map(product => (
          <div key={product.id} className="catalog-card">
            <img
              src={product.image}
              alt={product.name}
              className="catalog-card-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300/f5f5f5/999?text=No+Image';
              }}
            />
            <div className="catalog-card-info">
              <h3 className="catalog-card-name">
                {product.name}
              </h3>
              <p className="catalog-card-price">
                {product.price} VND
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;