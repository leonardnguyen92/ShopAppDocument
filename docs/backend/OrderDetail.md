# OrderDetail

---

## TOC

1. [Order Detail Entity](#entity)
2. [Order Detail DTO](#dto)
3. [Order Detail Response](#response)
4. [Order Detail Repository](#repository)
5. [Order Detail Service](#service)
6. [Order Detail Controller](#controller)

---

## Entity

- OrderDetail.java

```java
@Entity
@Table(name = "order_details")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "number_of_products", nullable = false)
    private int numberOfProducts;

    @Column(name = "total_money", nullable = false)
    private BigDecimal totalMoney;

    @Column(name = "color")
    private String color;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
```

---

## DTO

-OrderDetailDTO.java

```java
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDTO {
    @JsonProperty("order_id")
    @Min(value = 1, message = "Order's ID must be > 0")
    private Long orderId;

    @JsonProperty("product_id")
    @Min(value = 1, message = "Product's ID must be > 0")
    private Long productId;

    @DecimalMin(value = "0.0", inclusive = true, message = "Price must be >= 0")
    private BigDecimal price;

    @JsonProperty("number_of_products")
    @Min(value = 1, message = "number_of_products must be >= 1")
    private int numberOfProducts;

    @JsonProperty("total_money")
    @DecimalMin(value = "0.0", inclusive = true, message = "total_money must be >= 0")
    private BigDecimal totalMoney;

    private String color;
}
```

---

## Response

- OrderDetailResponse.java

```java
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailResponse {
    private Long id;

    @JsonProperty("price")
    private BigDecimal price;

    @JsonProperty("number_of_products")
    private int numberOfProducts;

    @JsonProperty("total_money")
    private BigDecimal totalMoney;

    @JsonProperty("color")
    private String color;

    @JsonProperty("order_id")
    private Long orderId;

    @JsonProperty("product_id")
    private Long productId;

    public static OrderDetailResponse fromOrderDetail(OrderDetail orderDetail) {
        return OrderDetailResponse
            .builder()
            .id(orderDetail.getId())
            .orderId(orderDetail.getOrder().getId())
            .productId(orderDetail.getProduct().getId())
            .price(orderDetail.getPrice())
            .numberOfProducts(orderDetail.getNumberOfProducts())
            .totalMoney(orderDetail.getTotalMoney())
            .color(orderDetail.getColor())
            .build();
    }
}
```

---

## Repository

- OrderDetailRepository.java

```java
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    List<OrderDetail> findByOrderId(Long orderId);
}
```

---

## Service

- IOrderDetailService.java

```java
public interface IOrderDetailService {
    OrderDetail createOrderDetail(OrderDetailDTO orderDetailDTO) throws Exception;

    OrderDetail getOrderDetail(Long id) throws Exception;

    OrderDetail updateOrderDetail(Long id, OrderDetailDTO orderDetailDTO) throws Exception;

    void deleteById(Long id);

    List<OrderDetail> findByOrderId(Long orderId);
}
```

- OrderDetailService.java

```java
@Service
@RequiredArgsConstructor
public class OrderDetailService implements IOrderDetailService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final OrderDetailRepository orderDetailRepository;

    @Override
    public OrderDetail createOrderDetail(OrderDetailDTO orderDetailDTO) throws Exception{
        Order order = orderRepository.findById(orderDetailDTO.getOrderId())
            .orElseThrow(() -> new DataNotFoundException("Cannot find Order with ID: " + orderDetailDTO.getOrderId()));

        Product product = productRepository.findById(orderDetailDTO.getProductId())
            .orElseThrow(() -> new DataNotFoundException("Cannot find Product with ID: " + orderDetailDTO.getProductId()));

        OrderDetail orderDetail = OrderDetail.builder()
            .order(order)
            .product(product)
            .numberOfProducts(orderDetailDTO.getNumberOfProducts())
            .price(orderDetailDTO.getPrice())
            .totalMoney(orderDetailDTO.getTotalMoney())
            .color(orderDetailDTO.getColor())
            .build();

        // lưu vào db
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail getOrderDetail(Long id) throws Exception{
        return orderDetailRepository.findById(id)
            .orElseThrow(() -> new DataNotFoundException("Cannot find OrderDetail with ID: " + id));
    }

    @Override
    public OrderDetail updateOrderDetail(Long id, OrderDetailDTO orderDetailDTO) throws Exception{
        // check existsing order detail
        OrderDetail existsingOrderDetail = orderDetailRepository.findById(id)
            .orElseThrow(() -> new DataNotFoundException("Cannot find Order Detail with ID: " + id));
        Order existsingOrder = orderRepository.findById(orderDetailDTO.getOrderId())
            .orElseThrow(() -> new DataNotFoundException("Cannot find Order with ID: " + orderDetailDTO.getOrderId()));
        Product existsingProduct = productRepository.findById(orderDetailDTO.getProductId())
            .orElseThrow(() -> new DataNotFoundException("Cannot find Product with ID: " + orderDetailDTO.getProductId()));

        existsingOrderDetail.setPrice(orderDetailDTO.getPrice());
        existsingOrderDetail.setNumberOfProducts(orderDetailDTO.getNumberOfProducts());
        existsingOrderDetail.setColor(orderDetailDTO.getColor());
        existsingOrderDetail.setTotalMoney(orderDetailDTO.getTotalMoney());
        existsingOrderDetail.setOrder(existsingOrder);
        existsingOrderDetail.setProduct(existsingProduct);

        return orderDetailRepository.save(existsingOrderDetail);
    }

    @Override
    public void deleteById(Long id){
        orderDetailRepository.deleteById(id);
    }

    @Override
    public List<OrderDetail> findByOrderId(Long orderId){
        return orderDetailRepository.findByOrderId(orderId);
    }
}
```

---

## Controller

- OrderDetailController.java

```java
@RestController
@RequestMapping("${api.prefix}/order_details")
@RequiredArgsConstructor
public class OrderDetailController {

    private final IOrderDetailService orderDetailService;

    //Add new one order detail
    @PostMapping
    public ResponseEntity<?> createOrderDetail(@Valid @RequestBody OrderDetailDTO orderDetailDTO, BindingResult result) {
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            OrderDetail orderDetail = orderDetailService.createOrderDetail(orderDetailDTO);
            return ResponseEntity.ok().body(OrderDetailResponse.fromOrderDetail(orderDetail));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderDetail(@Valid @PathVariable("id") Long id) {
        try {
            OrderDetail orderDetail = orderDetailService.getOrderDetail(id);
        return ResponseEntity.ok(orderDetail);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    // Get list order_details of order
    @GetMapping("/order/{orderId}")
    public ResponseEntity<?> getOrderDetails(@Valid @PathVariable("orderId") Long orderId) {
        try {
            List<OrderDetail> orderDetails = orderDetailService.findByOrderId(orderId);
            List<OrderDetailResponse> orderDetailResponses = orderDetails
                .stream()
                .map(OrderDetailResponse::fromOrderDetail)
                .toList();
            return ResponseEntity.ok(orderDetailResponses);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrderDetail(@Valid @PathVariable("id") Long id, @Valid @RequestBody OrderDetailDTO orderDetailDTO) {
        try {
            OrderDetail orderDetail = orderDetailService.updateOrderDetail(id, orderDetailDTO);
            return ResponseEntity.ok().body(OrderDetailResponse.fromOrderDetail(orderDetail));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderDetail(@Valid @PathVariable("id") Long id) {
        orderDetailService.deleteById(id);
        return ResponseEntity.ok().body("Delete Order Detail With ID: " + id + " success!");
    }

}
```

---

## Extends

---

### Definition

<pre>- A Summary DTO is a lightweight, simplified version of a full object.
- It contains only essential fields and is used inside other response objects to avoid returning overly large or unnecessary data</pre>

---

### How it is used

<pre>- Used as nested objects inside larger response structures (e.g., Order → ProductSummary).
- Used when you want to avoid returning full entity data.
- Reduces API payload and improves performance.
- Helps hide internal or sensitive fields.</pre>

---

### Purpose

<pre>- Reduce response size → lighter APIs.
- Improve security → avoid exposing internal fields.
- Simplify API output → easier for frontend.
- Performance optimization for large lists.
- Reusable components for multiple responses.</pre>

---

### Example

- Full Entity

```java
@Entity
public class Product {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private String sku;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
```

- Summary DTO (lightweight)

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductSummary {
    private String name;
    private BigDecimal price;
}
```

- Response using Summary

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private Long orderNumber;
    private String customerName;
    private ProductSummary product; // summary here
}
```

- Mapping entity → response (service example)

```java
OrderResponse response = new OrderResponse(
    order.getOrderNumber(),
    order.getCustomer().getName(),
    new ProductSummary(
        order.getProduct().getName(),
        order.getProduct().getPrice()
    )
);
```

- Response JSON (clean & compact)

```json
{
  "orderNumber": 1001,
  "customerName": "Leonard",
  "product": {
    "name": "Laptop ThinkPad",
    "price": 25000000
  }
}
```

**No:**

```
+ productId

+ createdAt

+ updatedAt

+ description

+ sku
```

**→ Very lightweight, clean, and easy to use.**

---

### When NOT to use Summary?

- When full data is required.

- When the client needs an ID to perform operations.

- When the object is already minimal.

---

### Conclusion

## **_Summary is a lightweight DTO that keeps your APIs clean, fast, and secure._**
