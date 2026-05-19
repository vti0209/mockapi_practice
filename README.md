# Product CRUD Management System

Một ứng dụng quản lý sản phẩm (CRUD) hoàn chỉnh được xây dựng với **ReactJS**, **Vite** và **Axios**. Dự án này minh họa cách tổ chức mã nguồn chuyên nghiệp, tách biệt giữa giao diện (Components) và logic xử lý dữ liệu (Services).

---

## 📂 Cấu trúc thư mục (Project Structure)

Dự án tuân thủ cấu trúc thư mục hiện đại, dễ bảo trì:

```text
product-crud/
├── public/             # Tài nguyên tĩnh (favicon, v.v.)
├── src/
│   ├── assets/         # Hình ảnh và font chữ
│   ├── components/     # Các thành phần UI tái sử dụng
│   │   ├── ProductCatalog.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── services/       # Xử lý logic API
│   │   └── api.js      # Cấu hình Axios & Endpoints
│   ├── styles/         # Chứa các file định dạng CSS
│   ├── App.jsx         # Component gốc
│   ├── index.css       # Styles toàn cục
│   └── main.jsx        # Điểm khởi chạy ứng dụng
├── .env                # Biến môi trường
├── .gitignore          # Cấu hình bỏ qua tệp tin Git
├── eslint.config.js    # Cấu hình kiểm tra lỗi code
├── index.html          # File entry HTML
└── package.json        # Danh sách thư viện và scripts

```

---

## 🚀 Công nghệ sử dụng

* **Framework:** React (Vite)
* **HTTP Client:** Axios
* **Styling:** CSS3 / Styles modules
* **Environment:** Quản lý biến môi trường qua `.env`

---

## 🛠️ Các tính năng chính

* [x] **Lấy danh sách sản phẩm**: Sử dụng `productAPI.getAll()`.
* [x] **Xem chi tiết**: Truy vấn dữ liệu qua ID sản phẩm.
* [x] **Tổ chức Service-Oriented**: Toàn bộ logic API nằm trong thư mục `services` giúp code gọn gàng, dễ debug.
* [ ] **Thêm/Sửa/Xóa**: (Đang hoàn thiện dựa trên `ProductForm.jsx`).

---

## 💻 Cài đặt & Sử dụng

### 1. Clone dự án

```bash
git clone <url-cua-ban>
cd product-crud

```

### 2. Cài đặt Dependencies

```bash
npm install

```

### 3. Cấu hình .env

Tạo file `.env` tại thư mục gốc:

```env
VITE_API_BASE_URL=[https://your-api-endpoint.com](https://your-api-endpoint.com)

```

### 4. Chạy Development Server

```bash
npm run dev

```

---

## Hồ Văn Tiết