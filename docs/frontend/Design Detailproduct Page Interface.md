# DetailProduct Interface

- Create detail-product component:

```js
ng generate component detail-product;
```

## detail-product.component.html:

```html
<div class="container">
  <div class="intro-section">
    <h1>Đây là trang chi tiết sản phẩm</h1>
    <p>Sử dụng Bootstrap</p>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="square-image">
              <img
                src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2"
                class="product-image"
                alt="Product Image"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div class="square-image">
              <img src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg" class="product-image" alt="Product Image" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="square-image">
              <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg" class="product-image" alt="Product Image" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="square-image">
              <img src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg" class="product-image" alt="Product Image" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="square-image">
              <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg" class="product-image" alt="Product Image" />
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row">
        <div class="thumbnail-container">
          <div class="thumbnail-item active">
            <img src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg" class="thumbnail-image" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-item">
            <img
              src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="thumbnail-image"
              alt="Thumbnail Image"
            />
          </div>
          <div class="thumbnail-item">
            <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg" class="thumbnail-image" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-item">
            <img src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg" class="thumbnail-image" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-item">
            <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg" class="thumbnail-image" alt="Thumbnail Image" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="product-details">
        <h2>Thông tin chi tiết sản phẩm</h2>
        <p>Mô tả sản phẩm</p>
        <p>Giá: $99</p>
        <div class="product-actions">
          <button class="btn btn-primary">Thêm vào giỏ hàng</button>
          <button class="btn btn-success">Mua ngay</button>
        </div>
        <div class="product-quantity">
          <div class="border-wrapper">
            <button type="button" aria-label="Giảm số lượng">-</button>
            <input type="text" value="1" />
            <button type="button" aria-label="Tăng số lượng">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## detail-product.component.scss:

```css
.intro-section {
  color: white;
  padding: 20px;
  text-align: center;
}

.product-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.thumbnail-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}

.thumbnail-item {
  width: 120px;
  height: 120px;
  margin-right: 5px; /* Them khoang cach ngang giua cac anh */
}

.thumbnail-item:last-child {
  margin-right: 0; /* Xoa khoang cach ngang o anh cuoi cung */
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-item.active {
  border: 2px solid white;
}

.product-details {
  color: white;
  padding: 20px;
}

.product-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.product-actions button {
  margin-right: 10px;
}

.product-quantity {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}

.product-quantity button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.product-quantity input {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  text-align: center;
  width: 40px;
  margin: 0 10px;
}

product-quantity input:focus {
  outline: none;
}

@media (max-width: 768px) {
  .thumbnail-item {
    width: 60px;
    height: 60px;
    margin-right: 3px;
  }
}
```
