# CATEGORY

## Category DTO

- CategoryDTO.java

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
    @NotBlank(message = "Category's name is required")
    private String name;
}
```

---

## Category Controller

- CategoryController.java

```java
@RestController
@RequestMapping("${api.prefix}/categories")
public class CategoryController {
    @GetMapping
    public ResponseEntity<?> getAllCategories(@RequestParam int page, @RequestParam int limit) {
        return ResponseEntity.ok(String.format("getAllCategories with page %d and limit %d"), page, limit);
    }

    @PostMapping("")
	public ResponseEntity<?> insertCategory(@Valid @RequestBody CategoryDTO category, BindingResult result) {
		if (result.hasErrors()) {
			List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
			return ResponseEntity.badRequest().body(errorMessages);
		}
		return ResponseEntity.ok("This is insertCategory: Category's name: " + category.getName());
	}

	@PutMapping("/{id}")
	public ResponseEntity<String> updateCategory(@PathVariable Long id) {
		return ResponseEntity.ok(String.format("This is updateCategory with id = %s", id));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
		return ResponseEntity.ok(String.format("Delete Category with id = %d", id));
	}
}
```

---

## Category Model

- Category.java

```java
@Entity
@Table(name = "categories")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;
}
```

---
