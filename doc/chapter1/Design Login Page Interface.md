# Login Interface

- Create login component:

```js
ng generate component login
```

## login.component.html:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="login-form mx-auto">
        <h2 class="login-header">Đăng nhập</h2>
        <div class="form-group">
          <label for="email">Email/Phone</label>
          <input type="text" class="form-control" id="email" />
          <div class="divider-nospace"></div>
        </div>
        <div class="mt-5"></div>
        <div class="form-group password-field">
          <label for="password">Mật khẩu</label>
          <input type="password" placeholder="Ít nhất 3 ký tự" class="form-control" id="password" />
          <i class="password-toggle fas fa-eye-slash"></i>
          <div class="divider-nospace"></div>
        </div>
        <div class="form-group">
          <div class="form-check checkbox-text">
            <span style="display: flex;">
              <input type="checkbox" class="form-check-input" id="remember" />
              <label class="form-check-label text-start" for="remember"> Ghi nhớ đăng nhập</label>
            </span>
            <a href="#" class="register-link">Quên mật khẩu</a>
          </div>
        </div>
        <div class="form-group">
          <select class="form-control access-right">
            <option selected disabled>Quyền đăng nhập</option>
            <option>Người dùng</option>
            <option>Quản trị viên</option>
          </select>
        </div>
        <button type="button" class="login-button">Đăng nhập</button>
        <div class="divider"></div>
        <p class="text-center">
          Bạn chưa đăng ký? <span> <a href="#" class="register-link">Tạo tài khoản</a></span>
        </p>
      </div>
    </div>
  </div>
</div>
```

## login.component.scss:

```css
   .container {
   color: white;
   height: 100vh;
   }

.login-form {
background-color: rgb(12, 12, 55);
border-radius: 10px;
padding: 20px;
max-width: 500px;
border: 1px solid rgb(32, 34, 60);
align-items: center;
justify-content: center;
}

.login-header {
text-align: center;
color: rgb(105, 244, 181);
margin-bottom: 20px;
}

.form-control {
background-color: transparent;
border: none;
color: white;
}

.form-control:focus {
color: white;
background-color: transparent;
outline: none;
border-color: transparent;
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

.login-button {
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
```
