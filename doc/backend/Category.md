# CATEGORY

---

## TOC

1. [Category DTO](#dto)
2. [Category Controller](#controller)
3. [Category Entity](#entity)
4. [Category Repsository](#repository)
5. [CategoryService](#service)

---

## DTO

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

## Controller

- CategoryController.java

```java
@RestController
@RequestMapping("${api.prefix}/categories")
@RequiredArgsConstructor
public class CategoryController {
	private final CategoryService categoryService;

	@PostMapping("")
	public ResponseEntity<?> createCategory(@Valid @RequestBody CategoryDTO categoryDTO, BindingResult result) {
		if (result.hasErrors()) {
			List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
			return ResponseEntity.badRequest().body(errorMessages);
		}
		categoryService.createCategory(categoryDTO);
		return ResponseEntity.ok("This is insertCategory: Category's name: " + categoryDTO.getName());
	}

    @GetMapping
    public ResponseEntity<?> getAllCategories(@RequestParam int page, @RequestParam int limit) {
		List<Category> categories =  categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

	@PutMapping("/{id}")
	public ResponseEntity<String> updateCategory(@PathVariable Long id,@Valid @RequestBody CategoryDTO categoryDTO) {
		categoryService.updateCategory(id, categoryDTO);
		return ResponseEntity.ok(String.format("This is updateCategory with id = %s", id));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
		categoryService.deleteCategory(id);
		return ResponseEntity.ok(String.format("Delete Category with id = %d", id));
	}
}
```

---

## Entity

- Category.java

```java
@Entity
@Table(name = "categories")
@Data
@Builder
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

## Repository

- CategoryRepository.java

```java
public interface CategoryRepository extends JpaRepository<Category, Long> {}

```

---

## Service

- Interface ICategoryService.java

```java
public interface ICategoryService {
	Category createCategory(CategoryDTO categoryDTO);

	Category getCategoryById(long id);

	List<Category> getAllCategory();

	Category updateCategory(long categoryId, CategoryDTO categoryDTO);

	void deleteCategory(long id);
}
```

- CategoryService.java

```java
@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService {
	private final CategoryRepository categoryRepository;

	@Override
	public Category createCategory(CategoryDTO categoryDTO){
		Category newCategory = Category.builder().name(categoryDTO.getName()).build();
		return categoryRepository.save(newCategory);
	}

	@Override
	public Category getCategoryById(long id){
		return categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
	}

	@Override
	public List<Category> getAllCategory(){
		return categoryRepository.findAll();
	}

	@Override
	public Category updateCategory(long categoryId,CategoryDTO categoryDTO){
		Category existingCategory = getCategoryById(categoryId);
		existingCategory.setName(categoryDTO.getName());
		categoryRepository.save(existingCategory);
		return existingCategory;
	}

	@Override
	public void deleteCategory(long id){
		return categoryRepository.deleteById(id);
	}
}
```

---
