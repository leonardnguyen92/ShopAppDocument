# Register Interface

- Create register component:

```js
ng generate component register
```

## register.component.html:

```html
<!-- <app-header></app-header> -->
<div class="container">
  <div class="row">
    div.col-md-6.offset-md-3 div.register-form.mx-auto h2.register-header Dang ky div.form-group label for=email Email/Phone input.form-control
    type=text #email div.divider-nospace div.mt-3 div.form-group.password-field label for=password Mat khau input.form-control#password type=password
    placeholder=it nhat 3 ky tu i.password-toggle.fas.fa-eye-slash div.divider-nospace div.mt-3 div.form-group.password-field label
    for="confirm-password" Go lai mat khau input.form-control#confirm-password type="password" placeholder="It nhat 3 ky tu"
    i.password-toggle.fas.fa-eye-slash div.divider-nospace div.mt-3 div.form-group label for="full-name" Ho va ten input.form-control#full-name
    type="text" div.divider-nospace div.mt-3 div.form-group label for="address" Dia chi input.form-control#address type="text" div.divider-nospace
    div.form-group div.form-check.checkbox-text span style="display: flex" input.form-check-input#agree type="checkbox"
    label.form-check-label.text-start for="agree" Toi dong y voi cac dieu kien button.register-button type="button" Dang ky div.divider p.text-center
    Ban da co tai khoan? span a.register-link href="#" Dang nhap
  </div>
</div>
<app-footer></app-footer>
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
