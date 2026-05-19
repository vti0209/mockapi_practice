import { useState, useEffect } from 'react';
import '../styles/ProductForm.css';

function ProductForm({ product, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    category: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        price: product.price || '',
        image: product.image || '',
        category: product.category || ''
      });
    } else {
      setFormData({
        name: '',
        price: '',
        image: '',
        category: ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.price) {
      alert('Vui lòng nhập tên và giá sản phẩm');
      return;
    }

    onSubmit({
      ...formData,
      price: parseFloat(formData.price)
    });
  };

  return (
    <div className="product-form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Tên sản phẩm:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Nhập tên sản phẩm"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Giá (VND):
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="form-input"
            placeholder="Nhập giá"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            URL hình ảnh:
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-input"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Danh mục:
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
            placeholder="Ví dụ: Áo, Quần, Giày..."
          />
        </div>

        <div className="form-buttons">
          <button
            type="submit"
            className="btn-submit"
          >
            {product ? 'Cập nhật' : 'Tạo mới'}
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="btn-cancel"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;