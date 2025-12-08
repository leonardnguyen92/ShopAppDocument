```
docs/
 ├── overview.md
 ├── architecture/
 │    ├── layers.md
 │    ├── flow.md
 │    └── packages.md
 ├── backend/
 │    ├── common/         ← Mọi thứ “shared”
 │    ├── modules/        ← Các module tách biệt: user, product, order
 │    ├── config/
 │    ├── security/
 │    ├── dto/
 │    ├── response/
 │    ├── entity/
 │    ├── repository/
 │    ├── service/
 │    └── controller/
 ├── db/
 └── frontend/
```

---

```
src/main/java/com/projectname/
 ├── common/
 │    ├── base/
 │    ├── constants/
 │    ├── enums/
 │    ├── exception/
 │    └── utils/
 ├── config/
 ├── modules/
 │    ├── user/
 │    │     ├── controller/
 │    │     ├── service/
 │    │     ├── repository/
 │    │     ├── entity/
 │    │     ├── request/
 │    │     └── response/
 │    ├── product/
 │    └── order/
 ├── security/
 └── Application.java
```
