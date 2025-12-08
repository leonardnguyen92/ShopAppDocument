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
    <p>Sử dụng Boostrap</p>
  </div>
  <div class="row">
    <div class="col-md-6">
      <h2 class="product-header">Thông tin người nhận</h2>
      <form action="">
        <div class="mb-3">
          <label for="name" class="form-label">Họ và tên</label>
          <input type="text" name="name" id="name" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" name="" id="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Số điện thoại</label>
          <input type="text" name="" id="phone" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Địa chỉ</label>
          <input type="text" name="" id="address" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="notes" class="form-label">Ghi chú</label>
          <input type="text" name="" id="notes" class="form-control" />
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <h2 class="product-order">Sản phẩm đã đặt hàng</h2>
      <div class="table-responsive">
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
                  <span class="product-name">Macbook Pro M1</span>
                </div>
              </td>
              <td>2</td>
              <td>100,000</td>
              <td>200,000</td>
            </tr>
            <tr>
              <td>
                <div class="product-info">
                  <img
                    src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Product Image"
                    class="product-image"
                  />
                  <span class="product-name">Iphone 17 Pro</span>
                </div>
              </td>
              <td>1</td>
              <td>150,000</td>
              <td>150,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-start mt-3">
        <h4 class="header-text text-end">Tổng giá: 350,000 đ</h4>
      </div>
      <div class="mt-3">
        <h4 class="product-header">Nhập coupon</h4>
        <div class="input-group">
          <input type="text" name="" id="" class="form-control" placeholder="Nhập coupon" />
          <button type="button" class="btn btn-gradient">Áp dụng</button>
        </div>
      </div>
      <div class="text-start mt-3">
        <button type="button" class="btn btn-gradient">Đặt hàng</button>
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
  border: 1px solid rgb(19, 33, 54);
  color: white;
}

.form-control:focus {
  border-color: white;
  background-color: rgb(19, 23, 42);
}

.form-label {
  color: white;
}

.product-order {
  color: rgb(105, 244, 181);
}

table {
  width: 100%;
  border-radius: 10px;
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
  background: linear-gradient(to right, rgb(255, 64, 180), rgb(126, 43, 237));
  color: white;
  border-radius: 30px;
  width: 100%;
  max-width: 200px;
}

@media (max-width: 768px) {
  .product-image {
    width: 60px;
    height: 60px;
  }
  .btn-gradient {
    max-width: 100%;
  }
}

.input-group {
  width: 100%;
}
```
