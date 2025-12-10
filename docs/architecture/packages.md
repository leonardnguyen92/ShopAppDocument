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

# 📦 packages.md

- Mục đích: mô tả cấu trúc các package trong backend, giải thích nhiệm vụ từng package để dev mới vào hiểu ngay kiến trúc hệ thống.

---

## 📚 1. Tổng quan kiến trúc package

- Source backend được chia theo mô hình layered architecture, kết hợp với modular feature-based.

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

---

## 🧩 2. Mô tả từng package

- 2.1. common/ — chứa các thành phần dùng chung toàn hệ thống

  Dùng cho các logic không thuộc riêng module nào.

          - common/base/

              Chứa các class cơ sở (được kế thừa nhiều nơi):

              + BaseEntity

              + BaseResponse

              + ApiResponse

              + PagingResponse

              + BaseException

          - common/constants/

              Hằng số:

              + StringConstants

              + ErrorCode

              + RegexPatterns

          - common/enums/

              Các enum tái sử dụng toàn dự án.

          - common/exception/

              Các exception tuỳ chỉnh + global exception handler.

          - common/utils/

              + Helpers:

              + ateUtils

              + wtUtils

              + tringUtils

- 2.2. config/ — cấu hình hệ thống

      + WebConfig

      + CorsConfig

      + DatabaseConfig

      + SwaggerConfig

      + SecurityConfig (nếu không đặt riêng folder security)

- 2.3. modules/ — tách từng chức năng độc lập

Mỗi module là một tính năng:

Ví dụ: user, product, order…

Một module gồm:

```
    module-name/
        ├── controller/
        ├── service/
        ├── repository/
        ├── entity/
        ├── request/
        └── response/
```

**_controller/_**

<p>- Xử lý HTTP request, mapping API, gọi service.</p>

**_service/_**

<p>- Chứa business logic.</p>

**_repository/_**

<p>- Làm việc với database (CRUD qua JPA Repository).</p>

**_entity/_**

<p>- Map bảng database vào object.</p>

**_request/_**

<p>- DTO dùng để nhận dữ liệu từ client.</p>

**_response/_**

<p>- DTO dùng để trả dữ liệu về client</p>
<p>  → thường extend BaseResponse.</p>

- 2.4. security/ — xử lý bảo mật

<p>- (Nếu tách riêng khỏi config)</p>

    - Authentication filter

    - JWT provider

    - UserDetails

    - PasswordEncoder config

---

## 🔁 3. Quy ước đặt tên

- Layer Cách đặt tên

```
    + Controller XxxController.java
    + Service XxxService.java + XxxServiceImpl.java
    + Repository XxxRepository.java
    + Entity Xxx.java (tên bảng)
    + Request DTO XxxRequest.java
    + Response DTO XxxResponse.java
    + Exception XxxException.java
```

---

## 🚦 4. Luồng xử lý từ request đến database

```
Client → Controller → Service → Repository → Entity → Database
↓
Response DTO
```

---

## 🎯 5. Mục tiêu của cách chia package này

- Dễ maintain

- Dễ onboard dev mới

- Tách module rõ ràng → scale dễ

- Tránh rối khi dự án lớn

- Chuẩn industry
