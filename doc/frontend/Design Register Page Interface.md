# Register Interface

- Create register component:

```js
ng generate component register
```

## register.component.html:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="register-form mx-auto">
        <h2 class="register-header">Đăng ký</h2>
        <div class="form-group">
          <label for="email" class="form-label">Email/Phone</label>
          <input type="text" name="" id="email" class="form-control" />
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group password-field">
          <label for="password" class="form-label">Mật khẩu</label>
          <input type="password" name="" id="password" class="form-control" placeholder="Vui lòng nhập ít nhất 8 ký tự" />
          <i class="password-toggle fas fa-eye-slash"></i>
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group password-field">
          <label for="confirm-password" class="form-label">Nhập lại mật khẩu</label>
          <input type="password" name="" id="confirm-password" class="form-control" placeholder="Vui lòng nhập ít nhất 8 ký tự" />
          <i class="password-toggle fas fa-eye-slash"></i>
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group">
          <label for="full-name" class="form-label">Họ và tên</label>
          <input type="text" name="" id="full-name" class="form-control" />
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group">
          <label for="address" class="form-label">Địa chỉ</label>
          <input type="text" name="" id="address" class="form-control" />
          <div class="divider-nospace"></div>
        </div>
        <div class="form-group">
          <div class="form-check checkbox-text">
            <span style="display: flex;">
              <input type="checkbox" name="" id="agree" class="form-check-input" />
              <label for="agree" class="form-check-label text-start">Tôi đồng ý với các điều khoản và điều kiện.</label>
            </span>
          </div>
        </div>
        <button type="button" class="register-button">Đăng ký</button>
        <div class="divider"></div>
        <p class="text-center">
          Bạn đã có tài khoản? <span><a href="#" class="register-link">Đăng nhập</a></span>
        </p>
      </div>
    </div>
  </div>
</div>
```

## register.component.scss:

```css
.container {
  color: white;
  height: 100vh;
}

.register-form {
  background-color: rgb(12, 12, 55);
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;
  border: 1px solid rgb(32, 34, 60);
  align-items: center;
  justify-content: center;
}

.register-header {
  text-align: center;
  color: rgb(105, 244, 181);
  margin-bottom: 20px;
}

.label-text {
  color: rgb(243, 165, 42);
}

.divider-nospace {
  border-top: 1px solid white;
}

.password-field {
  position: relative;
}

.password-field .form-control {
  box-sizing: border-box;
  // padding-right: 42px !important; /* đủ chỗ cho icon */
  // height: 45px; /* tăng chiều cao nếu input thấp */
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 0;
  bottom: -35px;
  margin: auto 0;
  height: 20px; /* icon size, có thể > hoặc < */
  display: flex;
  align-items: center;
  color: rgb(5, 244, 181);
  cursor: pointer;
  z-index: 2;
  font-size: 20px;
}

.checkbox-text {
  color: rgb(243, 165, 42);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

/* Màu checkbox khi được chọn */
.checkbox-text input[type='checkbox']:checked {
  border-color: white;
  background-color: rgb(233, 66, 178);
}

.form-check-input {
  margin-right: 5px;
}

.register-link {
  color: rgb(105, 244, 181);
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
  color: orange;
}

.access-right {
  margin-top: 20px;
  width: 200px;
  color: white;
  border: 1px solid rgb(255, 64, 180);
}

.access-right:focus {
  border: 1px solid rgb(255, 64, 180);
}

.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(243, 165, 42, 0.4);
  opacity: 1;
  /* Firefox */
}

.form-control:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(243, 165, 42, 0.4);
}

.form-control::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgba(243, 165, 42, 0.4);
}

.register-button {
  background: linear-gradient(to right, rgb(255, 64, 180), rgb(126, 43, 237));
  color: white;
  border-radius: 30px;
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
  border: none;
}

.divider {
  height: 1px;
  background-color: rgb(243, 165, 42);
  margin: 20px;
}

@media (max-width: 575px) {
  .register-form {
    max-width: 95vw;
    padding: 10px;
  }
}
```
