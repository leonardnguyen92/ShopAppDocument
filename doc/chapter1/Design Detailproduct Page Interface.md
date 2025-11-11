# DetailProduct Interface

- Create detail-product component:

```js
ng generate component detail-product;
```

## detail-product.component.html:

```html
<app-header></app-header>
<div class="container">
  <div class="intro-section">
    <h1>This is Detail Product Page</h1>
    <p>Su dung Bootstrap</p>
  </div>
  <div class="row">
    <div class="col-md-6">
      div.carousel.slide#carouselExample data-bs-ride="carousel div.carousel-inner div.carousel-item.active div.square-image img.product-image
      src="link image" alt="product-image" div.carousel-item div.square-image img.product-image src="link image" alt="product-image"
      div.carousel-item. div.square-image img.product-image src="link image" alt="product-image" div.carousel-item div.square-image img.product-image
      src="link image" alt="product-image" div.carousel-item div.square-image img.product-image src="link image" alt="product-image"
      button.carousel-control-prev type="button" data-bs-target="#carouselExample" data-bs-slide="prev" span.carousel-control-prev-icon
      aria-hidden="true" span.visually-hidden Previous button.carousel-control-next type="button" data-bs-target="#carouselExample"
      data-bs-slide="next" span.carousel-control-next-icon aria-hidden="true" span.visually-hidden next
      <div class="row">
        div.thumbnail-container div.thumbnail-item.active image.thumbnail-image src="link image" alt="Thumbnail Image" div.thumbnail-item
        image.thumbnail-image src="link image" alt="Thumbnail Image" div.thumbnail-item image.thumbnail-image src="link image" alt="Thumbnail Image"
        div.thumbnail-item image.thumbnail-image src="link image" alt="Thumbnail Image" div.thumbnail-item image.thumbnail-image src="link image"
        alt="Thumbnail Image"
      </div>
    </div>
    <div class="col-md-6">
      div.product-details h2 Thong tin chi tiet san pham p Mo ta san pham p Gia: $99 div.product-actions button.btn.btn-primary Them vao gio hang
      button.btn.btn-success Mua ngay div.product-quantity div.border-wrapper button - input type="text" value="1" button +
    </div>
  </div>
</div>
<app-footer></app-footer>
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
    margin-right: 5px; /_ Them khoang cach ngang giua cac anh _/
}

.thumbnail-item:last-child {
    margin-right: 0; /_ Xoa khoang cach ngang o anh cuoi cung _/
}

.thumbnail-item image {
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
```
