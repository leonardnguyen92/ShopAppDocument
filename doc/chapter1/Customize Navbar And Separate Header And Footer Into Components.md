# Customize Navbar And Separate Header And Footer Into Components

## 1. HeaderComponent

- Create HeaderComponent:

```js
ng generate component header
```

### 1.1 header.component.html

```html
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
          <circle cx="50" cy="50" r="45" fill="rgb(240, 101, 197)" >
          <circle cx="50" cy="50" r="45" fill="rgb(127, 68, 255)" >
        </svg>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Trang chủ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Thông báo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-shopping-cart icon"></i>Gio hang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Đăng nhập</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

### 1.2 header.component.scss

```css
.header {
  background-color: transparent;
  color: rgb(173, 178, 203);
}
.navbar {
  background-color: transparent !important;
}
.navbar .container {
  background-color: transparent !important;
}
.navbar .container .navbar-brand {
  background-color: rgb(173, 178, 203);
}
.navbar .container .navbar-nav .nav-link {
  color: rgb(173, 178, 203);
  border-radius: 18px;
  padding: 8px 16px;
}

.navbar .container .navbar-nav .nav-link.active {
  background-color: rgb(127, 68, 255) !important;
  color: white !important;
}
```

## 2. FooterComponent

- Create FooterComponent:

```js
ng generate component footer
```

## 2.1 footer.component.html

```html
<footer>
  <!-- Footer content goes here -->
  <div class="footer">
    <div class="container">
      <div class="row footer-description">
        <div class="col-md-6">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
        <div class="col-md-6">
          <p class="text-end">Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </div>
  </div>
</footer>
```

## 2.2 footer.component.scss

```css
.footer-description {
  color: rgb(173, 178, 203);
}
```
