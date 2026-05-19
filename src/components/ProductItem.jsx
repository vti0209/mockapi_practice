import { useState } from 'react';
import '../styles/ProductItem.css';

function ProductItem({ product, onEdit, onDelete }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="product-item-card">
      <img 
        src={imageError ? 'https://via.placeholder.com/640x480/f5f5f5/999?text=No+Image' : product.image}
        alt={product.name}
        onError={() => setImageError(true)}
        className="product-item-image"
      />
      
      <h3 className="product-item-name">{product.name}</h3>
      
      <p className="product-item-price">
        <strong>Giá:</strong> {product.price} VND
      </p>
      
      <div className="product-item-buttons">
        <button
          onClick={() => onEdit(product)}
          className="btn-edit"
        >
          Sửa
        </button>
        
        <button
          onClick={() => onDelete(product.id)}
          className="btn-delete"
        >
          Xóa
        </button>
      </div>
    </div>
  );
}

export default ProductItem;