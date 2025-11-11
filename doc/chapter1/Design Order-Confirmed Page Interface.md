# Design Order-Confirmed Page Interface

- Create order-confirm component:

```js
ng generate component order-confirm
```

## order-confirm.component.html:

```html
<app-header></app-header>
<div class="container">
   	<div class="confirmation-container">
   		<h1>Xac nhan don hang</h1>
   		<p>Cam on ban da dat hang! Duoi day la thong tin ve don hang cua ban</p>
   	</div>
   	<div class="row">
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
   		<div class="text-center mt-3">
   			<button class="btn btn-gradient" type="button">Tiep tuc mua sam</button>
   		</div>
   	</div>
</div>
<app-footer></app-footer>
```

## order-confirm.component.scss:

```css
.container {
  color: white;
}

.confirmation-container {
  margin: 50px auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
}

.intro-section {
  color: white;
  padding: 20px;
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

.btn-gradient {
  background: linear-gradient(to right, rgb(225, 64, 180), rgb(126, 43, 237));
  color: white;
  border-radius: 30px;
  width: 200px;
}
```
