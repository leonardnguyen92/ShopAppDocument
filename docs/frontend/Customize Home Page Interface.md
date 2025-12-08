# HomeComponent

- index.html:

```html
<body>
  <!-- <app-home></app-home>   -->
  <!-- <app-detail-product></app-detail-product> -->
  <!-- <app-order></app-order> -->
  <app-root></app-root>
  <!-- <app-register></app-register> -->
  <!-- <app-login></app-login> -->
  <!-- <app-root></app-root> -->
</body>
```

- styles.scss

```css
body {
  background-color: linear-gradient(rgb(14, 17, 36), rgb(36, 26, 73));
}
```

- app.component.html

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

- Create HomeComponent:

```js
ng generate component home
```

# 1. Home.Component.html

```html
<div class="container">
  <div class="intro-section">
    <h1>Đây là trang home</h1>
    <p>Trang hiển thị danh sách các sản phẩm, kèm ảnh.</p>
    <p>Các bạn có thể chọn xem sản phẩm và mua hàng tại đây.</p>
  </div>
  <!--Đoạn này có 1 ô search box bên trái và 1 combo box bên phải -->
  <div class="search-box">
    <input type="text" class="form-control search-input" placeholder="Tìm sản phẩm" />
    <select name="" id="" class="form-control product-category">
      <option selected disabled>Danh mục sản phẩm</option>
      <option>Đồ điện tử</option>
      <option>Đồ gia dụng</option>
      <option>Bánh kẹo</option>
    </select>
    <button class="btn btn-primary ml-2">Tìm kiếm</button>
  </div>
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <div class="product-item">
        <img
          src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Product Image"
          class="product-image"
        />
        <h3 class="product-name">Product 1</h3>
        <p class="product-description">Tiện ích trong nhà bếp, thiết kế nhỏ gọn, dễ sử dụng.</p>
        <p class="product-warranty">Bảo hành: 12 tháng</p>
        <p class="product-price">Giá: <del>$200</del> $100</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-alt"></i>
        </div>
        <div class="product-actions">
          <button type="button" class="btn btn-primary">Thêm vào giỏ hàng</button>
          <span class="space-x"></span>
          <button type="button" class="btn btn-success">Mua ngay</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="product-item">
        <img
          src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Product Image"
          class="product-image"
        />
        <h3 class="product-name">Product 1</h3>
        <p class="product-description">Tiện ích trong nhà bếp, thiết kế nhỏ gọn, dễ sử dụng.</p>
        <p class="product-warranty">Bảo hành: 12 tháng</p>
        <p class="product-price">Giá: <del>$200</del> $100</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-alt"></i>
        </div>
        <div class="product-actions">
          <button type="button" class="btn btn-primary">Thêm vào giỏ hàng</button>
          <span class="space-x"></span>
          <button type="button" class="btn btn-success">Mua ngay</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="product-item">
        <img
          src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Product Image"
          class="product-image"
        />
        <h3 class="product-name">Product 1</h3>
        <p class="product-description">Tiện ích trong nhà bếp, thiết kế nhỏ gọn, dễ sử dụng.</p>
        <p class="product-warranty">Bảo hành: 12 tháng</p>
        <p class="product-price">Giá: <del>$200</del> $100</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-alt"></i>
        </div>
        <div class="product-actions">
          <button type="button" class="btn btn-primary">Thêm vào giỏ hàng</button>
          <span class="space-x"></span>
          <button type="button" class="btn btn-success">Mua ngay</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="product-item">
        <img
          src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Product Image"
          class="product-image"
        />
        <h3 class="product-name">Product 1</h3>
        <p class="product-description">Tiện ích trong nhà bếp, thiết kế nhỏ gọn, dễ sử dụng.</p>
        <p class="product-warranty">Bảo hành: 12 tháng</p>
        <p class="product-price">Giá: <del>$200</del> $100</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-alt"></i>
        </div>
        <div class="product-actions">
          <button type="button" class="btn btn-primary">Thêm vào giỏ hàng</button>
          <span class="space-x"></span>
          <button type="button" class="btn btn-success">Mua ngay</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="product-item">
        <img
          src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Product Image"
          class="product-image"
        />
        <h3 class="product-name">Product 1</h3>
        <p class="product-description">Tiện ích trong nhà bếp, thiết kế nhỏ gọn, dễ sử dụng.</p>
        <p class="product-warranty">Bảo hành: 12 tháng</p>
        <p class="product-price">Giá: <del>$200</del> $100</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-alt"></i>
        </div>
        <div class="product-actions">
          <button type="button" class="btn btn-primary">Thêm vào giỏ hàng</button>
          <span class="space-x"></span>
          <button type="button" class="btn btn-success">Mua ngay</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="d-flex justify-content-center">
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#">First</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Previous</a>
      </li>
      <ng-container>
        <li class="page-item">
          <a class="page-link" href="#"></a>
        </li>
      </ng-container>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Last</a>
      </li>
    </ul>
  </nav>
</div>
```

# 2. Home.Component.scss

```css
.intro-section {
  text-align: center;
  color: white;
  padding: 20px;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.product-category {
  width: 200px;
}

.search-input {
  width: 300px;
  background-color: rgb(19, 23, 42);
  margin-right: 10px;
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

.form-control {
  background-color: transparent;
  color: white;
}

.form-control::placeholder {
  //_ Chrome, Firefox, Opera, Safari 10.1+ _/
  color: rgba(255, 255, 255, 0.5);
  opacity: 1; //_ Firefox_?/
}

.form-control:-ms-input-placeholder {
  //_ Interner Explorer 10-11 _/
  color: rgba(255, 255, 255, 0.5);
}

.form-control::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.product-item {
  background-color: rgb(19, 23, 42);
  border: 1px solid rgb(35, 39, 61);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
}

.product-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product-name {
  color: white;
}

.product-description {
  color: rgb(173, 178, 203);
}

.product-warranty {
  color: rgb(242, 126, 212);
}

.product-price {
  color: white;
}

.product-rating {
  color: #ffd700;
  margin-top: 10px;
}

.product-actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.space-x {
  margin: 0 5px;
}

@media (max-width: 768px) {
  .search-box {
    flex-direction: column;
  }
  .search-input,
  .product-category {
    width: 100%;
    margin: 5px 0;
  }
}
```
