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

    @JsonProperty("number_of_products")
    @Min(value = 1, message = "number_of_products must be >= 1")
    private int numberOfProducts;

    @JsonProperty("total_money")
    @Min(value = 0, message = "total_money must be >= 0")
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
    private Order orderId;

    @JsonProperty("product_id")
    private Product productId;

    public static OrderDetailResponse fromOrderDetail(OrderDetail orderDetail) {
        return OrderDetailResponse
            .builder()
            .id(orderDetail.getId())
            .orderId(orderDetail.getOrder().getId())
            .productId(orderDetail.getProduct().getId())
            .price(orderDetail.getPrice())
            .numberOfProduct(orderDetail.getNumberOfProducts())
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
public interface OrderDetailRepository extends JpaRepository<OderDetail, Long> {
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

    OrderDetail updateOrderDetail(Long id, OrderDetaiDTO orderDetailDTO) throws Exception;

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
            .totalMoNey(orderDetailDTO.getTotalMoney())
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
    public OrderDetail updateOrderDetail(Long id, OrderDetaiDTO orderDetailDTO) throws Exception{
        // check existsing order detail
        OrderDetail existsingOrderDetail = orderDetailRepository.findById(id)
            .orElseThrow(new DataNotFoundException("Cannot find Order Detail with ID: " + id));
        Order existsingOrder = orderRepository.findById(orderDetailDTO.getOrderId())
            .orElseThrow(new DataNotFoundException("Cannot find Order with ID: " + orderDetailDTO.getOrderId()));
        Product existsingProduct = productRepository.findById(orderDetailDTO.getProductId())
            .orElseThrow(() -> new DataNotFoundException("Cannot find Product with ID: " + orderDetailDTO.getProductId()));

        existsingOrderDetail.setPrice(orderDetailDTO.getPrice());
        existsingOrderDetail.setNumberOfProducts(orderDetailDTO.getNumberOfProducts());
        existsingOrderDetail.setColor(orderDetailDTO.getColor());
        existsingOrderDetail.setTotalMoney(orderDetailFTO.getTotalMoney());
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
            OrderDetail orderDetail = orderDetailService.createOrderDetail(orderDetailDTO)
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
    public ResponseEntity<?> updateOrderDetail(@Valid @PathVariable("id") Long id, @RequestBody OrderDetailDTO orderDetailDTO) {
        try {
            OrderDetail orderDetail = orderDetailService.updateOrderDetail(id, orderDetailDTO);
            return ResponseEntity.ok().body(OrderDetailResponse.fromOrderDetail(orderDetail));
        } catch (Exception) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrderDetail(@Valid @PathVariable("id") Long id) {
        orderDetailService.deleteById(id);
        return ResponseEntity.ok().body("Delete Order Detail With ID: " + id + "success!");
    }

}
```

---
