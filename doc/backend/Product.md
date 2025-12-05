# Product

## TOC

1. [ProductDTO](#dto)
2. [ProductEntity](#entity)
3. [ProductController](#controller)
4. [UpgradeVersion](#upgrade-version-not-test)
5. [Repository](#repository)
6. [Service](#service)

## DTO

- ProductDTO.java

```java
@Data
@Builder
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

}
```

- ProductImageDTO.java

```java
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductImageDTO {
    @JsonProperty("product_id")
    @Min(value = 1, message = "Product's ID must be > 0")
    private Long productId;

    @Size(min = 5, max = 200, message = "Image's Name")
    @JsonProperty("image_url")
    private String imageUrl;
}
```

---

## Entity

- Product.java

```java
@Entity
@Table(name = "products")
@Data
@Builder
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
    @JoinColumn(name = "category_id")
    private Category category
}
```

---

- ProductImage.java

```java
@Entity
@Table(name = "product_images")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductImage {

    public static final int MAXIMUM_IMAGES_PER_PRODUCT = 5;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "image_url", nullable = false, length = 300)
    private String imageUrl;
}
```

---

## Controller

- ProductsController.java

```java
@RestController
@RequestMapping("${api.prefix}/products")
@RequiredArgsConstructor
public class ProductsController {
    private final IProductService productService;

    @GetMapping("")
    public ResponseEntity<List<ProductListResponse>> getAllProducts(@RequestParam int page, @RequestParam int limit) {
        PageRequest pageRequest = PageRequest.of(page, limit, Sort.by("createdAt").descending());
        Page<ProductResponse> productPage = productService.getAllProducts(pageRequest);
        int totalPages = productPage.getTotalPages();
        List<ProductResponse> products = productPage.getContent();

        return ResponseEntity.ok(ProductListResponse.builder().products(products).totalPages(totalPages).build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getProductWithId(@PathVariable Long id) {
        return ResponseEntity.ok(String.format("get Product with id = %d successfully", id));
    }

    @PostMapping("")
    //POST http://localhost:8088/v1/api/products
    public ResponseEntity<?> insertProduct(@Valid @RequestBody ProductDTO productDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            Product newProduct = productService.createProduct(productDTO);

            return ResponseEntity.ok(newProduct);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping(values = "uploads/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    //POST http://localhost:8088/v1/api/products
    public ResponseEntity<?> uploadImages(@PathVariable("id") Long productId, @ModelAttribute("file") List<MultipartFile> files) {
        try {
            Product existsingProduct = productService.getProductById(productId);
            files = files == null ? new ArrayList<MultipartFile>() : files;
            if(files.size() > 5) {
                return ResponseEntity.badRequest().body("You can only upload maximum 5 images");
            }
            List<ProductImage> productImages = new ArrayList<ProductImage>();
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
                ProductImage productImage = productService.createProductImage(existsingProduct.getId(), ProductImageDTO.builder()
                    .imageUrl(filename)
                    .build());
                // Lưu vào bảng product_images
                productImages.add(productImage);
            }
            return ResponseEntity.ok(productImages);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private String storeFile(MultipartFile file) throws IOException {
        if(!isImageFile(file) || file.getOriginalFilename() == null){
            throw new IOException("Invalid Image Format");
        }
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
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

    private boolean isImageFile(MultipartFile file) {
        String contentFile = file.getContentType();
        return contentFile != null && contentType.startsWith("image/");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable Long id, @Valid @RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(String.format("Update Product with id = %d is successfully", id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        return ResponseEntity.ok(String.format("Delete Product with id = %d is successfully", id));
    }
}
```

---

## Upgrade Version (not test)

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
            Product newProduct = productService.createProduct(productDTO);
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

## Repository

- ProductRepository.java

```java
public interface ProductRepository extends JpaRepository(Product, Long) {
    boolean existsByName(String name);
    Page<Product> findAll(Pageable pageable); // phân trang
    // List<Product> findByCategoryId(Long categoryId);
}
```

- ProductImageRepository.java

```java
public interface ProductImageRepository extends JpaRepository(ProductImage, Long) {
    List<ProductImage> findByProductId(Long productId);
}
```

---

## Service

- Interface IProductService.java

```java
public interface IProductService{
    Product createProduct(ProductDTO productDTO);

    Product getProductById(long id);

    Page<ProductResponse> getAllProduct(PageRequest pageRequest);

    Product updateProduct(long id, ProductDTO productDTO);

    void deleteProduct(long id);

    boolean existsByName(String name);

    ProductImage createProductImage(Long productId, ProductImageDTO productImageDTO) throws Exception;
}
```

- ProductService.java

```java
@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ProductImageRepository productImageRepository;

    @Override
    public Product createProduct(ProductDTO productDTO) throws DataNotFoundException{
        Category existsingCategory = categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(() -> new DataNotFoundException("Cannot find category with id: " + productDTO.getCategoryId()));
        Product newProduct = Product.builder()
                .name(productDTO.getName())
                .price(productDTO.getPrice())
                .thumbnail(productDTO.getThumbnail())
                .category(existsingCategory)
                .build();
        return productRepository.save(newProduct);
    }

    @Override
    public Product getProductById(long productId) throws DataNotFoundException{
        return productRepository.findById(productId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find product with id = " + productId));
    }

    @Override
    public Page<ProductResponse> getAllProduct(PageRequest pageRequest){
        // Lấy danh sách sản phẩm theo trang(page) và giới hạn(limit)
        return productRepository.findAll(pageRequest).map(product -> {
            ProductResponse productResponse = ProductResponse.builder()
            .name(product.getName())
            .price(product.getPrice())
            .thumbnail(product.getThumbnail())
            .description(product.getDescription())
            .categoryId(product.getCategory().getId())
            .build()
            productResponse.setCreatedAt(product.getCreatedAt());
            productResponse.setUpdatedAt(product.getUpdateAt());
            return productResponse;
        });
    }

    @Override
    public Product updateProduct(long id, ProductDTO productDTO) throws Exception{
        Product existsingProduct = getProductById(id);
        if (existsingProduct != null) {
            Category existsingCategory = categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(() -> new DataNotFoundException("Cannot find category with id: " + productDTO.getCategoryId()));
            existsingProduct.setName(productDTO.getName());
            existsingProduct.setCategory(existsingCategory);
            existsingProduct.setPrice(productDTO.getPrice());
            existsingProduct.setThumbnail(productDTO.getThumbnail());
            existsingProduct.setDescription(productDTP.getDescription());
            return productRepository.save(existsingProduct);
        }
        return null;
    }

    @Override
    public void deleteProduct(long id){
        Optional<Product> optionalProduct = productRepository.findById(id);
        optionalProduct.ifPresent(productRepository::delete);
    }

    @Override
    public boolean existsByName(String name){
        return productRepository.existsByName(name);
    }

    @Override
    public ProductImage createProductImage(Long productId, ProductImageDTO productImageDTO) throws Exception{
        Product existsingProduct = productRepository.findById(productId)
            .orElseThrow(() -> new DataNotFoundException("Cannot find product with id: " + productImageDTO.getProductId()));

        ProductImage newProductImage = ProductImage.builder().
            .product(existsingProduct)
            .imageUrl(productImageDTO.getImageUrl())
            .build();
        int size = productImageRepository.findByProductId(productId).size();
        if (size >= 5) {
            throw new InvalidParamException("Number of images must be <= 5");
        }
        return productImageRepository.save(newProductImage);
    }
}
```

---

pom.xml

```xml
<dependency>
    <groupId>javax.activation</groupId>
    <artifactId>javax.activation-api</artifactId>
    <version>1.2.0</version>
</dependency>
```
