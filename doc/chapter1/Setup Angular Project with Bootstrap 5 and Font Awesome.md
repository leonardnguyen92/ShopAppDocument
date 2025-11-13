## 1. Setup Angular Project with Bootstrap 5 and Font Awesome

### 1.1 Install NodeJS(20 LTS), npm, yarn

- System update

```sql
sudo apt update && sudo apt upgrade -y
```

- Install curl if you don't have it yet

```sql
sudo apt install -y curl
```

- Add repo Node.js 20.x (LTS)

```sql
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

- Install Node.js with npm

```sql
sudo apt install -y nodejs
```

- Install yarn (optial)

```sql
# Kích hoạt corepack (công cụ tích hợp sẵn của Node.js)
sudo corepack enable

# Cập nhật Yarn mới nhất
sudo corepack prepare yarn@stable --activate
```

### 1.2 Install Angular

```sql
- npm install -g @angular/cli@(15.2.2)
/*
- npm install -g @angular/cli@lastet
*/
- mkdir /* project-folder */ && cd /* project-folder */
- ng new /* app's-name */
- run project: "yarn start" or "npm start"
- create component: ng generate component /* component-name */
```

## 2. Integrate Bootsrap 5 And Fontawesome Into Angular Project

### 2.1 Integrate Boostrap 5

- Install Boostrap 5:

```html
npm i bootstrap@5.3.0
```

- check: package.json => dependencies => bootstrap
- angular.json => search: "styles" => add:
  "node_modules/bootstrap/dist/css/bootstrap.min.css"

### 2.2 Integrate Fontawesome

- Install Fontawesome:

```html
npm i @fortawesome/fontawesome-free
```

- angular.json => search: "styles" => add:
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
