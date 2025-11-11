# HomeComponent

- index.html:

```html
<style>
  body {
    background-color: linear-gradient(rgb(14, 17, 36), rgb(36, 26, 73));
  }
</style>

<body>
  <!-- <app-home></app-home>   -->
  <!-- <app-detail-product></app-detail-product> -->
  <!-- <app-order></app-order> -->
  <app-order-detail></app-order-detail>
  <!-- <app-register></app-register> -->
  <!-- <app-login></app-login> -->
  <!-- <app-root></app-root> -->
</body>
```

- Create HomeComponent:

```js
ng generate component home
```

# 1. Home.Component.html

```html
<app-header></app-header>
  <div class="container">
  	<div class="intro-section">
  		<h1>Day la trang home</h1>
  		<p>Trang hien thi danh sach cac san pham, kem anh</p>
  		<p>Cac ban co the chon xem san pham va mua hang tai day</p>
  	</div>
  	<!--Doan nay co 1 o searchbox ben trai, 1 combobox ben phai -->
  	<div class="search-box">
  		<input type="text" class="form-control search-input" placeholder="Tim san pham">
  		<select class="form-control product-category">
  			<option selected disabled>Danh muc san pham</option>
  			<option>Do dien tu</option>
  			<option>Do gia dung</option>
  			<option>Banh keo</option>
  		</select>
  	</div>
  	<div class="row">
  		<div class="col-lg-4 col-md-6">
  			<div class="product-item">
  				<img src="www.pexels.com" alt="Product Image" class="product-image">
  				<h3 class="product-name">Product 1</h3>
  				<p class="product-description"></p>
  				<p class="product-warranty">Bao hanh: 12 thang</p>
  				<p class="product-price">Gia: <del>$200</del> $100</p>
  				<div class="product-rating">
  					https://fontawesome.com
  					<i class="fa-solid fa-star"></i>*4
  					<i class="fa-solid fa-star-half-alt"></i>
  				</div>
  				<div class="product-actions">
  					<button class="btn btn-primary">Them vao gio hang</button>
  					<span class="space-x">
  					<button class="btn btn-success">Mua ngay</button>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
  <app-footer></app-footer>

```

# 2. Home.Component.scss

```css
.intro-section {
   text-align: center;
   color: white;
   padding: 20px;
   }

search-box {
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

.form-control::placeholder { /_ Chrome, Firefox, Opera, Safari 10.1+ _/
color: rgba(255, 255, 255, 0.5);
opacity: 1; /_ Firefox_/
}

.form-control:-ms-input-placeholder { /_ Internet Explorer 10-11 _/
color: rgba(255, 255, 255, 0.5);
}

.form-control::-ms-input-placeholder { /_ Microsoft Edge _/
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
color: #FFD700;
margin-top: 10px;
}

.product-actions {
display: flex;
justify-content: center;
margin-top: 20px;
}

.space-x {
margin: 0 5px;/_margin-top, margin-right, margin-bottom, margin-left_/
}
```
