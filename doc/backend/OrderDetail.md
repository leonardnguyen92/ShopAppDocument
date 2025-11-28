# OrderDetail

---

## TOC

1. [OrderDetailController](#controller)
2. [OrderDetailDTO](#dto)
3. [OrderDetailEntity](#entity)
4. [OrderDetailEntity](#repository)

---

## Controller

- OrderDetailController.java

```java
@RestController
@RequestMapping("${api.prefix}/order_details")
public class OrderDetailController {
    //Add new one order detail
    @PostMapping
    public ResponseEntity<?> createOrderDetail(@Valid @RequestBody OrderDetailDTO orderDetail, BindingResult result) {
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            return ResponseEntity.ok("Create Order Detail is successfully.")
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderDetail(@Valid @PathVariable("id") Long id) {
        return ResponseEntity.ok("getOrderDetail with ID: " + id);
    }

    // Get list order_details of order
    @GetMapping("/order/{orderId}")
    public ResponseEntity<?> getOrderDetails(@Valid @PathVariable("orderId") Long orderId) {
        return ResponseEntity.ok("getOrderDetails with orderId: " + orderId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrderDetail(@Valid @PathVariable("id") Long id, @RequestBody OrderDetailDTO newOrderDetailData) {
        return ResponseEntity.ok("updateOrderDetail with id = " + id + "newOrderDetailData: " + newOrderDetailData);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderDetail(@Valid @PathVariable("id") Long id) {
        return ResponseEntity.noContent().build();
    }

}
```

---

## DTO

-OrderDetaiDTO.java

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

    @Min(value = 0, message = "Price must be >= 0")
    private BigDecimal price;

    @JsonProperty("number_of_product")
    @Min(value = 1, message = "number_of_product must be >= 1")
    private int numberOfProduct;

    @JsonProperty("total_money")
    @Min(value = 0, message = "total_money must be >= 0")
    private BigDecimal totalMoney;

    private String color;
}
```

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

    @Column(name = "number_of_product", nullable = false)
    private int numberOfProduct;

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

## Repository

- OrderDetailRepository.java

```java
public interface OrderDetailRepository extends JpaRepository<OderDetail, Long> {
    List<OrderDetail> findByOrderId(Long orderId)
}
```

---
