# Design Order-Confirmed Page Interface

- Create order-confirm component:

```js
ng generate component order-confirm
```

## order-confirm.component.html:

```html
<div class="container">
  <div class="confirmation-container">
    <h1>Xác nhận đơn hàng</h1>
    <p>Cảm ơn đã đặt hàng! Dưới đây là thông tin chi tiết về đơn hàng của bạn</p>
  </div>
  <div class="row">
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
                <span class="product-name">iphone 17</span>
              </div>
            </td>
            <td>2</td>
            <td>100,000 đ</td>
            <td>200,000 đ</td>
          </tr>
          <tr>
            <td>
              <div class="product-info">
                <img src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg" alt="Product Image" class="product-image" />
                <span class="product-name">Macbook pro M2 2025</span>
              </div>
            </td>
            <td>2</td>
            <td>100,000 đ</td>
            <td>200,000 đ</td>
          </tr>
          <tr>
            <td>
              <div class="product-info">
                <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg" alt="Product Image" class="product-image" />
                <span class="product-name">Apple Vision Pro 2023</span>
              </div>
            </td>
            <td>2</td>
            <td>100,000 đ</td>
            <td>200,000 đ</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center mt-3">
      <button type="button" class="btn btn-gradient">Tiếp tục mua sắm</button>
    </div>
  </div>
</div>
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

tr:hover td {
  background-color: rgba(255, 255, 255, 0.05);
}

.btn-gradient {
  background: linear-gradient(to right, rgb(255, 64, 180), rgb(126, 43, 237));
  color: white;
  border-radius: 30px;
  width: 100%;
  max-width: 200px;
}

@media (max-width: 768px) {
  .confirmation-container {
    padding: 10px;
    margin: 20px auto;
    max-width: 95vw;
  }
  .product-image {
    width: 60px;
    height: 60px;
  }
  .btn-gradient {
    max-width: 100%;
  }
}
```
