# ShopApp Database

```sql
CREATE DATABASE shopapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE shopapp;
```

---

# Users Table

- Khách hàng khi muốn mua hàng => phải đăng ký tài khoản => bảng users

```sql
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullname NVARCHAR(100) DEFAULT '',
    phone_number VARCHAR(100) NOT NULL,
    address NVARCHAR(200) DEFAULT '',
    password VARCHAR(100) NOT NULL DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active TINYINT(1) DEFAULT 1,
    date_of_birth DATE,
    facebook_account_id INT DEFAULT 0,
    google_account_id INT DEFAULT 0,
    role_id int,
    FOREIGN KEY(role_id) REFERENCES roles(id)
) COMMENT 'THÔNG TIN TÀI KHOẢN';
```

---

# Roles Table

```sql
CREATE TABLE roles(
    id INT PRIMARY KEY,
    name varchar(20) UNIQUE NOT NULL
);
```

---

# Tokens Table

```sql
CREATE TABLE tokens(
    id INT PRIMARY KEY AUTO_INCREMENT,
    token VARCHAR(255) UNIQUE NOT NULL,
    token_type VARCHAR(50) NOT NULL,
    expiration_date DATETIME,
    revoked TINYINT(1) NOT NULL,
    expired TINYINT(1) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

# Social Acount Table

- Hỗ trợ đăng nhập từ Facebook và Google

```sql
CREATE TABLE social_accounts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    provider VARCHAR(20) NOT NULL COMMENT 'Tên nhà social network',
    provider_id VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL COMMENT 'Email tài khoản',
    name VARCHAR(100) NOT NULL COMMENT 'Tên người dùng',
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
) COMMENT 'TÀI KHOẢN MẠNG XÃ HỘI';
```

---

# Category Table

```sql
CREATE TABLE categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name NVARCHAR(100) NOT NULL DEFAULT '' COMMENT 'Tên danh mục, vd: Đồ điện tử'
) COMMENT 'DANH MỤC SẢN PHẨM';
```

---

# Product Table

```sql
CREATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name NVARCHAR(350) NOT NULL DEFAULT '' COMMENT 'Tên sản phẩm',
    price FLOAT NOT NULL CHECK(price >= 0),
    thumbnail VARCHAR(300) DEFAULT '',
    description LONGTEXT DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
) COMMENT 'SẢN PHẨM';
```

---

# Product Images Table

```sql
CREATE TABLE product_images(
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT fk_product_images_produc_id FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(300)
);
```

---

# Orders Table

```sql
CREATE TABLE orders(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    fullname NVARCHAR(100) DEFAULT '',
    email VARCHAR(100) DEFAULT '',
    phone_number VARCHAR(20) NOT NULL,
    address NVARCHAR(200) NOT NULL,
    note NVARCHAR(255) DEFAULT '',
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending','processing','shipped','delivered','cancelled') DEFAULT 'pending' COMMENT 'Trạng thái đơn hàng',
    shipping_method NVARCHAR(100),
    shipping_address NVARCHAR(255) DEFAULT '',
    shipping_date DATE,
    tracking_number VARCHAR(100),
    payment_method VARCHAR(100),
    payment_date DATE,
    total_money FLOAT CHECk (total_money >= 0),
    active TINYINT(1) DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id)
) COMMENT 'THÔNG TIN ĐẶT HÀNG';
```

---

# Order-Details Table

```sql
CREATE TABLE order_detail(
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    price FLOAT CHECK(price >= 0),
    number_of_products INT CHECK(number_of_product > 0),
    total_money FLOAT CHECK (total_money >= 0),
    color VARCHAR(20) DEFAULT '',
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

---
