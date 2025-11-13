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
          <label for="email">Email/Phone</label>
          <input type="text" class="form-control" id="email" />
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group password-field">
          <label for="password">Mật khẩu</label>
          <input type="password" placeholder="Ít nhất 3 ký tự" class="form-control" id="password" />
          <i class="password-toggle fas fa-eye-slash"></i>
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group password-field">
          <label for="confirm-password">Gõ lại mật khẩu</label>
          <input type="password" placeholder="Ít nhất 3 ký tự" class="form-control" id="confirm-password" />
          <i class="password-toggle fas fa-eye-slash"></i>
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group">
          <label for="full-name">Họ và tên</label>
          <input type="text" class="form-control" id="full-name" />
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-3"></div>
        <div class="form-group">
          <label for="address">Địa chỉ</label>
          <input type="text" class="form-control" id="address" />
          <div class="divider-nospace"></div>
        </div>
        <div class="form-group">
          <div class="form-check checkbox-text">
            <span style="display: flex;">
              <input type="checkbox" class="form-check-input" id="agree" />
              <label class="form-check-label text-start" for="agree"> Tôi đồng ý với các điều khoản và điều kiện</label>
            </span>
          </div>
        </div>
        <button type="button" class="register-button">Đăng ký</button>
        <div class="divider"></div>
        <p class="text-center">
          Bạn đã có tài khoản? <span> <a href="#" class="register-link">Đăng nhập</a></span>
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

.password-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: rgb(`05, 244, 181);
    cursor: pointer;
}

.checkbox-text {
    color: rgb(243, 165, 42);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

/_ Mau checkbox khi duoc chon _/
.checkbox-text input[type="checkbox"]:checked {
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
/_ Chrome, Firefox, Opera, Safari 10.1+ _/
    color: rgba(243, 165, 42, 0.4);
    opacity: 1;
/_ Firefox _/
}

.form-control:-ms-input-placeholder {
/_ Internet Explorer 10-11 _/
    color: rgba(243, 165, 42, 0.4);
}

.form-control::-ms-input-placeholder {
/_ Microsoft Edge _/
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

.divider-nospace {
    border-top: 1px solid white;
}
```
