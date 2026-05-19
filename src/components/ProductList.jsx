import { useEffect, useState } from 'react';
import { productAPI } from '../services/api';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import '../styles/ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await productAPI.getAll();
      setProducts(res.data);
    } catch (error) {
      console.error('Lỗi tải data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Hàm hiển thị thông báo
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      try {
        await productAPI.delete(id);
        setProducts(products.filter(p => p.id !== id));
        showToast('Xóa sản phẩm thành công!');
      } catch (error) {
        console.error(error);
        showToast('Xóa thất bại!', 'error');
      }
    }
  };

  // Cập nhật sản phẩm
  const handleUpdate = async (updatedData) => {
    try {
      const res = await productAPI.update(editingProduct.id, updatedData);
      setProducts(products.map(p => p.id === editingProduct.id ? res.data : p));
      setEditingProduct(null);
      showToast('Cập nhật sản phẩm thành công!');
    } catch (error) {
      console.error(error);
      showToast('Cập nhật thất bại!', 'error');
    }
  };

  // Thêm sản phẩm mới
  const handleAdd = async (newData) => {
    try {
      const res = await productAPI.create(newData);
      setProducts([...products, res.data]);
      setShowAddForm(false);
      showToast('Thêm sản phẩm mới thành công!');
    } catch (error) {
      console.error(error);
      showToast('Thêm sản phẩm thất bại!', 'error');
    }
  };

  const closeModal = () => {
    setEditingProduct(null);
    setShowAddForm(false);
  };

  if (loading) return <div className="loading">⏳ Đang tải...</div>;

  const isModalOpen = editingProduct !== null || showAddForm;

  return (
    <div className="product-list-container">
      {toast.show && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <h1>Quản lý sản phẩm</h1>
      
      <button 
        onClick={() => setShowAddForm(true)}
        className="btn-add-product"
      >
        + Thêm sản phẩm mới
      </button>

      {/* Danh sách sản phẩm - bị mờ khi modal mở */}
      <div className={`products-grid ${isModalOpen ? 'modal-open' : ''}`}>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onEdit={() => setEditingProduct(product)}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="modal-close">✕</button>

            <h2 className="modal-title">
              {editingProduct ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}
            </h2>

            <ProductForm 
              product={editingProduct} 
              onSubmit={editingProduct ? handleUpdate : handleAdd} 
              onCancel={closeModal} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;