# Design Order Page Interface

- Create order component:

```js
ng generate component order
```

## order.component.html:

```html
<div class="container">
  <div class="intro-section">
    <h1>Đây là trang Order</h1>
    <p>Sử dụng Bootstrap</p>
  </div>
  <div class="row">
    <div class="col-md-6">
      <h2 class="product-header">Thông tin người nhận</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Họ và tên</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Số điện thoại</label>
          <input type="text" class="form-control" id="phone" />
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <h2 class="product-order">Sản phẩm đã đặt hàng</h2>
      <table>
        <thead>
          <tr>
            <th scope="col" class="text-start">Sản phẩm</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Đơn giá</th>
            <th scope="col">Tổng giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="product-info">
                <img
                  src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Product Image"
                  class="product-image"
                />
                <span class="product-name">Tên sản phẩm</span>
              </div>
            </td>
            <td>2</td>
            <td>100,000 đ</td>
            <td>200,000 đ</td>
          </tr>
          <tr>
            <td>
              <div class="product-info">
                <img
                  src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Product Image"
                  class="product-image"
                />
                <span class="product-name">Tên sản phẩm</span>
              </div>
            </td>
            <td>1</td>
            <td>150,000 đ</td>
            <td>150,000 đ</td>
          </tr>
        </tbody>
      </table>
      <div class="text-start mt-3">
        <h4 class="header-text text-end ">Tổng giá: 350,000 đ</h4>
      </div>
      <div class="mt-3">
        <h4 class="product-header">Nhập coupon</h4>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Nhập coupon" />
          <button class="btn btn-gradient" type="button">Áp dụng</button>
        </div>
      </div>
      <div class="text-start mt-3">
        <button class="btn btn-gradient" type="button">Đặt hàng</button>
      </div>
    </div>
  </div>
</div>
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
