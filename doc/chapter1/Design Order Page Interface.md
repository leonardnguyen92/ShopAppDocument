# Design Order Page Interface

- Create order component:

```js
ng generate component order
```

## order.component.html:

```html
<app-header></app-header>
<div class="container">
   	<div class="intro-section">
   		<h1>Day la trang Order</h1>
   		<p>Su dung bootstrap</p>
   	</div>
   	<div class="row">
   		<div class="col-md-6">
   			<h2 class="product-header">Thong tin nguoi nhan</h2>
   			<form>
   				<div class="mb-3">
   					<label for="name" class="form-label">Ho va ten</label>
   					<input type="text" class="form-control" id="name">
   				</div>
   				<div class="mb-3">
   					<label for="email" class="form-label">Email</label>
   					<input type="email" class="form-control" id="email">
   				</div>
   				<div class="mb-3">
   					<label for="phone" class="form-label">So dien thoai</label>
   					<input type="text" class="form-control" id="phone">
   				</div>
   			</form>
   		</div>
   		<div class="col-md-6">
   			<h2 class="product-order">San pham da dat hang</h2>
   			<table>
   				<thead>
   					<tr>
   						<th scope="col" class="text-start">San pham</th>
   						<th scope="col">So luong</th>
   						<th scope="col">Don gia</th>
   						<th scope="col">Tong gia</th>
   					</tr>
   				</thead>
   				<tbody>
   					<tr>
   						<td>
   							<div class="product-info">
   								<img src="link anh san pham" alt="Product Image" class="product-image">
   								<span class="product-name">Ten san pham
   							</div>
   						</td>
   						<td>2</td>
   						<td>100,000 d</td>
   						<td>200,000 d</td>
   					</tr>
   					<tr>
   						<td>
   							<div class="product-info">
   								<img src="link anh san pham" alt="Product Image" class="product-image">
   								<span class="product-name">Ten san pham
   							</div>
   						</td>
   						<td>1</td>
   						<td>150,000 d</td>
   						<td>250,000 d</td>
   					</tr>
   				</tbody>
   			</table>
   			<div class="text-start mt-3">
   				<h4 class="header-text text-end">Tong gia: 350,000 d</h4>
   			</div>
   			<div class="mt-3">
   				<h4 class="product-header">Nhap coupon</h4>
   				<div class="input-group">
   					<input type="text" class="form-control" placeholder="Nhap coupon">
   					<button class="btn btn-gradient" type="button">Ap dung</button>
   				</div>
   			</div>
   			<div class="text-start mt-3">
   				<button class="btn btn-gradient" type="button">Dat hang</button>
   			</div>
   		</div>
   	</div>
</div>
<app-footer></app-footer>
```

## order.component.scss:

```css
.container {
  color: white;
}

.intro-section {
  color: white;
  padding: 20px;
  text-align: center;
}

.product-header {
  color: rgb(233, 176, 66);
}

.form-control {
  background-color: rgb(19, 23, 42);
  border: 1px solid rgb(29, 33, 54);
  color: white;
}

.form-control:focus {
  border-color: white;
  background-color: rgb(19, 23, 42);
}

.form-label {
  color: white;
}

.product-header {
  color: rgb(233, 66, 76);
}

.product-order {
  color: rgb(105, 244, 181);
}

table {
  width: 100%;
  border-radius: 10px;
  border: none;
  border-collapse: separate;
  border: 1px solid white;
  border-spacing: 0;
  background-color: rgb(12, 13, 54);
}

th,
td {
  padding: 10px;
  text-align: center;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
}

.product-name {
  color: white;
  margin-right: 10px;
}

.btn-gradient {
  background: linear-gradient(to right, rgb(225, 64, 180), rgb(126, 43, 237));
  color: white;
  border-radius: 30px;
  width: 200px;
}
```
