# Order

---

## TOC

1. [OrderStatus](#status)
2. [OrderDTO](#dto)
3. [OrderResponse](#response)
4. [OrderEntity](#entity)
5. [OrderRepository](#repository)
6. [OrderService](#service)
7. [OrderCotroller](#cotroller)

---

## Order Status

- OrderStatus.java

```java
public class OrderStatus {
    public static final String PENDING = "pending";
    public static final String PROCESSING = "processing";
    public static final String SHIPPED = "shipped";
    public static final String DELIVERED = "delivered";
    public static final String CANCELLED = "cancelled";
}
```

---

## DTO

-OrderDTO.java

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDTO {
    @JsonProperty("user_id")
    private Long userId;

    @JsonProperty("full_name")
    private String fullName;

    private String email;

    @JsonProperty("phone_number")
    @NotBlank(message = "Phone number is required")
    @Size(min = 5, max = 11, message = "Phone nume must be between 5 and 11 number")
    private String phoneNumber;
    private String address;
    private String note;

    @JsonProperty("shipping_method")
    private String shippingMethod;

    @JsonProperty("shipping_address")
    private String shippingAddress;

    @JsonProperty("shipping_date")
    private LocalDate shippingDate;

    @JsonProperty("tracking_number")
    private String trackingNumber;

    @JsonProperty("payment_method")
    private String paymentMethod;

    @JsonProperty("total_money")
    @Min(value = 0, message = "Total money must be >= 0")
    private BigDecimal totalMoney;
}
```

---

## Response

- OrderResponse

```java
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse extends BaseResponse {
    private Long id;

    @JsonProperty("user_id")
    private Long userId;

    @JsonProperty("fullname")
    private String fullName;

    @JsonProperty("email")
    private String email;

    @JsonProperty("phone_number")
    private String phoneNumber;

    @JsonProperty("address")
    private String address;

    @JsonProperty("note")
    private String note;

    @JsonProperty("order_date")
    private LocalDateTime orderDate;

    @JsonProperty("status")
    private String status;

    @JsonProperty("shipping_method")
    private String shippingMethod;

    @JsonProperty("shipping_address")
    private String shippingAddress;

    @JsonProperty("shipping_date")
    private LocalDate shippingDate;

    @JsonProperty("tracking_number")
    private String trackingNumber;

    @JsonProperty("payment_method")
    private String paymentMethod;

    @JsonProperty("payment_date")
    private LocalDate paymentDate;

    @JsonProperty("total_money")
    private BigDecimal totalMoney;

    @JsonProperty("is_active")
    private boolean isActive;

}
```

-OrderListResponse

```java
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderListResponse {

}
```

---

## Entity

- Order.java

```java
@Entity
@Table(name = "orders")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fullname", length = 100)
    private String fullName;

    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "phone_number", nullable = false, length = 20)
    private String phoneNumber;

    @Column(name = "address", nullable = false, length = 100)
    private String address;

    @Column(name = "note", length = 100)
    private String note;

    @Column(name = "order_date")
    private LocalDate orderDate;

    @Column(name = "status")
    private String status;

    @Column(name = "shipping_method")
    private String shippingMethod;

    @Column(name = "shipping_address")
    private String shippingAddress;

    @Column(name = "shipping_date")
    private LocalDate shippingDate;

    @Column(name = "tracking_number")
    private String trackingNumber;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "payment_date")
    private LocalDate paymentDate;

    @Column(name = "total_money")
    private BigDecimal totalMoney;

    @Column(name = "is_active")
    private boolean isActive;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
```

---

## Repository

- OrderRepository.java

```java
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
}
```

---

## Service

- IOrderService

```java
public interface IOrderService {
    OrderResponse createOrder(orderDTO orderDTO) throws Exception;
    OrderResponse getOrder(Long id);
    OrderResponse updateOrder(Long id, OrderDTO orderDTO) throws Exception;
    void deleteOrder(Long id);
    List<OrderResponse> findByUserId(Long userId);
}
```

- OrderService:

```java
@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService {
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;

    @Override
    public OrderResponse createOrder(orderDTO orderDTO) throws Exception {
        // Check existsing user_id
        User user = userRepository.findById(orderDTO.getUserId())
            .orElseThrow(() -> new DataNotFoundException("Cannot find user with ID: " + orderDTO.getUserId()));
        // convert orderDTO => order
        // user ModelMapper
        modelMapper.typeMap(OrderDTO.class, Order.class).addMappings(mapper -> mapper.skip(Order::setId));
        Order order = new Order();
        modelMapper.map(orderDTO, order);
        order.setUser(user);
        order.setOrderDate(LocalDate.now());
        order.setStatus(OrderStatus.PENDING);
        // Check shipping date must be greater than today
        LocalDate shippingDate = orderDTO.getShippingDate() == null ? LocalDate.now(): orderDTO.getShippingDate();
        if(shippingDate.before(LocalDate.now())) {
            throw new DataNotFoundException("Date must be at least today!");
        }
        order.setShippingDate(shippingDate);
        order.setIsActive(true);
        orderRepository.save(order);
        // modelMapper.typeMap(Order.class, OrderResponse.class);
        return modelMapper.map(order, OrderResponse.class);
    }

    @Override
    public OrderResponse getOrder(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public OrderResponse updateOrder(Long id, OrderDTO orderDTO) throws Exception {
        Order order = orderRepository.findById(id).orElseThrow(() ->
            new DataNotFoundException("Cannot find order with id: " + id));
        User existsingUser = userRepository.findById(orderDTO.getUserId()).orElseThrow(() ->
            new DataNotFoundException("Cannot find user with id: " + existsingOrder.getUserId()));
        // Tạo luồng bằng ánh xạ riêng để kiểm soát việc ánh xạ
        modelMapper.typeMap(OrderDTO.class, Order.class)
            .addMappings(mapper -> mapper.skip(Order::setId));
        // Cập nhật các trường của đơn hàng từ orderDTO
        modelMapper.map(orderDTO, order);
        order.setUser(existsingUser);
        return orderRepository.save(order);
    }

    @Override
    public void deleteOrder(Long id) {
        Order order = orderRepository.findById(id).orElse(null);
        if(order != null) {
            order.setIsActive = false;
            orderRepository.save(order);
        }
        return null;
    }

    @Override
    public List<OrderResponse> findByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

}
```

---

## Cotroller

- OrderController.java

```java
@RestController
@RequestMapping("${api.prefix}/orders")
@RequiredArgsConstructor
public class OrderController {
    private final IOrderService orderService;

    @PostMapping("")
    public ResponseEntity<?> createOrder(@Valid @RequestBody OrderDTO orderDTO, BindingResult result) {
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            OrderResponse orderResponse = orderService.createOrder(ordetDTO);
            return ResponseEntity.ok(orderResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    // GET http://localhost:8088/api/v1/orders/4
    // Lấy ra một đơn hàng có giá trị id = 4
    public ResponseEntity<?> getOrder(@Valid @PathVariable("id") Long orderId) {
        try {
            Order existsingOrder = orderService.getOrder(orderId);
            return ResponseEntity.ok(existsingOrder);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/user/{user_id}")
    // GET http://localhost:8088/api/v1/orders/user/4
    // Lấy ra các đơn hàng của một user
    public ResponseEntity<?> getOrders(@Valid @PathVariable("user_id") Long userId) {
        try {
            List<Order> orders = orderService.findByUserId(userId);
            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    // PUT http://localhost:8088/api/v1/orders/2
    // công việc của admin
    public ResponseEntity<?> updateOrder(@Valid @PathVariable long id, @Valid @RequestBody OrderDTO order) {
        try {
            Order order = orderService.updateOrder(id, orderDTO);
            return ResponseEntity.ok(order);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@Valid @PathVariable long id) {
        try {
            orderService.deleteOrder(id);
            return ResponseEntity.ok(String.format("Delete order with ID = %d successfully.", id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
```

---
