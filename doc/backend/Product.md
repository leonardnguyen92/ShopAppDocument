# Product

## Product DTO

- ProductDTO.java

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

    @NotEmpty(message = "Description cannot be empty")
	private String description;

	@NotBlank(message = "Category Id is required")
	@JsonProperty("category_id")
	private Long categoryId;

    private List<MultipartFile> files;
}
```

---

## Product Model

- Product.java

```java
@Entity
@Table(name = "products")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 350)
    private String name;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "thumbnail", length = 300)
    private String thumbnail;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @Column(name = "category_id")
    private Category category
}
```

---

## Product Controller

- ProductsController.java

```java
@RestController
@RequestMapping("${api.prefix}/products")
public class ProductsController {
    @GetMapping("")
    public ResponseEntity<String> getAllProducts(@RequestParam int page, @RequestParam int limit) {
        return ResponseEntity.ok(String.format("getAllProducts with page = %d and limit = %d", page, limit));
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getProductWithId(@PathVariable Long id) {
        return ResponseEntity.ok(String.format("get Product with id = %d successfully", id));
    }

    @PostMapping("", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> insertProduct(@Valid @RequestBody ProductDTO product, /* @RequestPart("file") MultipartFile file ,*/ BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            List<MultipartFile> files = product.getFiles();
            files = files == null ? new ArrayList<MultipartFile>() : files;
            for(MultipartFile file : files) {
                if(file.getSize() == 0) {
                    continue;
                }
                if(file.getSize() > 10 * 1024 * 1024) {
                    // throw new ResponseStatusException(HttpStatus.PAYLOAD_TOO_LARGE, "File is too large! Maximum size is 10MB");
                    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE).body("File is too large! Maximum size is 10MB");
                }

                String contentType = file.getContentType();
                if(contentType == null || !contentType.startsWith("image/")) {
                    return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body("File must be an image");
                }

                String filename = storeFile(file);
                    // Tiến hành lưu vào DB => xử lý sau;
                    // Lưu vào bảng product_images
            }
            return ResponseEntity.ok(String.format("Insert Product with name = %s is successfully.", product.getName()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private String storeFile(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        // Thêm UUID vào trước tên file để đảm bảo tên file là duy nhất
        String uniqueFilename = UUID.randomUUID().toString() + "_" + fileName;
        // Đường dẫn thư mục bạn muốn lưu file
        Path uploadDir = Paths.get("uploads");
        // Kiểm tra và tạo thư mục nếu nó không tồn tại
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }
        // Đường dẫn đầy đủ đến file
        Path destination = Paths.get(uploadDir.toString(), uniqueFilename);
        // Sao chép file vào thư mục đích
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return uniqueFilename;
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

---

# Upgrade Version (not test)

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

    @PostMapping("", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> insertProduct(@Valid @ModelAttribute ProductDTO product, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            List<MultipartFile> files = product.getFiles();
            files = files == null ? new ArrayList<MultipartFile>() : files;
            List<String> fileErrors = new ArrayList<>();
            for(MultipartFile file : files) {
                if (file == null || file.isEmpty()) {
                    continue;
                }
                List<String> error = validateFile(file);
                if (error.isEmpty()) {
                    String filename = storeFile(file);
                    //TODO: lưu DB
                } else {
                    String fileName = file.getOriginalFilename();
                    error = error.stream()
                             .map(e -> fileName + ": " + e)
                             .toList();
                    fileErrors.addAll(error);
                }
            }
            if (!fileErrors.isEmpty()) {
                return ResponseEntity.badRequest().body(fileErrors);
            }
            return ResponseEntity.ok(String.format("Insert Product with name = %s is successfully.", product.getName()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private List<String> validateFile(MultipartFile file) {
        List<String> errors = new ArrayList<String>();
        // Validate size
        if (file.getSize() > 10 * 1024 * 1024) {
            errors.add("File exceeds 10MB limit.");
        }
        // Validate mime-type
        String contentType = file.getContentType();
        if (contentType == null || !contentType.startsWith("image/")) {
            errors.add("Only image files are allowed.");
        }
        // Validate extension
        String filename = file.getOriginalFilename();
        if (filename != null && !filename.isBlank()) {
            String ext = getFileExtension(filename);
            List<String> allowed = List.of("jpg", "jpeg", "png", "webp", "gif");
            if (!allowed.contains(ext.toLowerCase())) {
                errors.add("Invalid file extension.");
            }
        }
        return errors;
    }

    private String getFileExtension(String filename) {
        return filename.substring(filename.lastIndexOf(".") + 1);
    }

    private String storeFile(MultipartFile file) throws IOException {
        // Validate filename
        String originalName = StringUtils.cleanPath(file.getOriginalFilename());
        if (originalName == null || originalName.isBlank()) {
            throw new IOException("Invalid file name.");
        }
        // Chặn path traversal kiểu ../../something
        if (originalName.contains("..")) {
            throw new IOException("Invalid path sequence in file name.");
        }
        // Tạo tên file unique
        String uniqueName = UUID.randomUUID().toString() + "_" + originalName;
        // Config folder (để dễ tái sử dụng)
        Path uploadDir = Paths.get("uploads");

        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }
        Path destination = uploadDir.resolve(uniqueName);
        // THAY CHO Files.copy => dùng transferTo sạch hơn
        file.transferTo(destination.toFile());
        return uniqueName;
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

---
