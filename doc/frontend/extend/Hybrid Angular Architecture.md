# Hybrid Angular Architecture: Combining Modules And Standalone Components

## Architecture Folder

- Create Dashboard Folder:

```css
app/
├── dashboard/
│ ├── pages/
│ │      └── dashboard.component.ts
│ ├── widgets/
│ │      └── widget.component.ts
│ ├── dashboard.routes.ts
│ └── dashboard.module.ts
├── app.component.ts
├── app.routes.ts
└── app.module.ts
```

---

## Dashboard Folder

- dashboard.component.ts

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <app-wiget></app-wiget>
  `,
})
export class DashboardComponent {}
```

- widget.component.ts

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: ` <div class="widget-box">
    <p>Widget Content</p>
  </div>`,
})
export class WidgetComponent {}
```

- dashboard.routes.ts

```js
import { Routess } from '@angullar/router';
import { DashboardComponent } from './pages/dashboard.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Dashboard', layout: 'blank' },
  },
];
```

- dashboard.module.ts

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard.routes';

import { DashboardComponent } from './pages/dashboard.component';
import { WidgetComponent } from './widgets/widget.component';

@NgModule({
  declarations: [DashboardComponent, WidgetComponent],
  imports: [CommonModule, RouterModule.forChild(DashboardRoutes)],
})
export class DashboardModule {}
```

---

## App Folder

- app.component.ts

```js
import {Component, onInit} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Title} from '@angular/platform-brower';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
    showHeaderFooter = true;

    contructor (
        private router: Router,
        private route: ActivatedRoute,
        private titleService: Title
    ) {}

    ngOnInit(){
        this.router.events
            .pipe(
                filter((event) => event instancof NavigationEnd),
                map(() => {
                    let rt = this.route;
                    while (rt.firstChild) rt = rt.firstChild;
                    return rt;
                }),
                mergeMap ((rt) => rt.data)
            )
            .subscribe((data)=> {
                this.showheaderFooter = data['layout'] !== 'blank';

                if (data['title']) {
                    this.titleService.setTitle(data['title']);
                } else {
                    this.titleService.setTitle('Tên mặc định app');
                }
            });
    }
}
```

- app.routes.ts

```js
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    data: { title: 'Trang chủ' },
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    data: { title: 'Đăng nhập', layout: 'blank' },
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),
    data: { title: 'Đăng ký', layout: 'blank' },
  },
  {
    path: 'product/detail',
    loadComponent: () => import('./detail-product/detail-product.component').then((m) => m.DetailProductComponent),
    data: { title: 'Chi tiết sản phẩm' },
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then((m) => m.CartComponent),
    data: { title: 'Giỏ hàng' },
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout.component').then((m) => m.CheckoutComponent),
    data: { title: 'Thanh toán' },
  },
  {
    path: 'order',
    loadComponent: () => import('./order/order.component').then((m) => m.OrderComponent),
    data: { title: 'Thông tin đơn hàng' },
  },
  {
    path: 'order-confirm',
    loadComponent: () => import('./order-confirm/order-confirm.component').then((m) => m.OrderConfirmComponent),
    data: { title: 'Xác nhận đơn hàng' },
  },
  //Lazy load Dashboard Module
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];
```

- app.module.ts

```js
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HeaderComponent, FooterComponent],
  providers: [Title],
  boostrap: [AppComponent],
})
export class AppModule {}
```
