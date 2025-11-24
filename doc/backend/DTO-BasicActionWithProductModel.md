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

## Product DTO

- ProductDTO

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    @NotBlank(message = "Title is required")
    @Size(min = 3, max = 200, message = "Title must be between 3 and 200 characters")
    private String name;

    @Min(value = 0, message = "Price must be greater than or equal to 0")
    @Max(value = 10000000, message = "Price must be less than or equal to 10,000,000")
    private Float price;

    private String thumbnail;

    @NotEmpty(message = "Description is not empty")
	private String description;

	@NotBlank(message = "Category Id is required")
	@JsonProperty("category_id")
	private String categoryId;
}
```

- ProductsController

```java
@RestController
@RequestMapping("/api/v1/products")
public class ProductsController {
    @GetMapping("")
    public ResponseEntity<String> getAllProducts(@RequestParam int page, @RequestParam int limit) {
        return ResponseEntity.ok(String.format("getAllProducts with page = %d and limit = %d", page, limit));
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getProductWithId(@PathVariable Long id) {
        return ResponseEntity.ok(String.format("get Product with id = %d successfully", id));
    }

    @PostMapping("")
    public ResponseEntity<?> insertProduct(@Valid @RequestBody ProductDTO product, BindingResult result) {
        if(result.hasErrors()) {
            List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
            return ResponseEntity.badRequest().body(errorMessages);
        }
        return ResponseEntity.ok(String.format("Insert Product with name = %s is successfully.", product.getName()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable Long id) {
        return ResponseEntity.ok(String.format("Update Product with id = %d is successfully", id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        return ResponseEntity.ok(String.format("Delete Product with id = %d is successfully", id));
    }
}
```
