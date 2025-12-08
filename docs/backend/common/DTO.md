# DTO - DATA TRANSFER OBJECT AND PRODUCT MODEL

## Data Transfer Object

- A DTO is a simple object used to transfer data between different layers of an application (Controller → Service → Repository) or between backend and frontend.
  => It contains ONLY data — no business logic.

<ol>Typical uses:
    <li>To hide internal entity structure from the outside world.</li>
    <li>To validate request inputs.</li>
    <li>To send structured response objects</li>
    <li>To avoid exposing database entities directly</li>
</ol>

- Example:

```java
public class UserDTO {
    private Long id;
    private String name;
    private String email;
}
```

---
