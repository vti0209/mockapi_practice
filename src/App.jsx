import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCatalog from './components/ProductCatalog'; 
import ProductList from './components/ProductList';       
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="app-navbar">
          <h2 className="navbar-brand">Shop</h2>
          <Link to="/" className="navbar-link">
            <p>Xem Sản Phẩm</p>
          </Link>
          <Link to="/admin" className="navbar-link">
            <p>Quản Lý Sản Phẩm</p>
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="/admin" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;