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
    private Date shippingDate;

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
    private Date shippingDate;

    @JsonProperty("tracking_number")
    private String trackingNumber;

    @JsonProperty("payment_method")
    private String paymentMethod;

    @JsonProperty("payment_date")
    private Date paymentDate;

    @JsonProperty("total_money")
    private BigDecimal totalMoney;

    @JsonProperty("active")
    private boolean active;

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
public class order {
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
    private Date orderDate;

    @Column(name = "status")
    private String status;

    @Column(name = "shipping_method")
    private String shippingMethod;

    @Column(name = "shipping_address")
    private String shippingAddress;

    @Column(name = "shipping_date")
    private Date shippingDate;

    @Column(name = "tracking_number")
    private String trackingNumber;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "payment_date")
    private Date paymentDate;

    @Column(name = "total_money")
    private BigDecimal totalMoney;

    @Column(name = "active")
    private boolean active;

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
    OrderResponse updateOrder(Long id, OrderDTO orderDTO);
    void deleteOrder(Long id);
    List<OrderResponse> getAllOrders(Long userId);
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
        order.setOrderDate(new Date());
        order.setStatus(OrderStatus.PENDING);
        // Check shipping date must be greater than today
        Date shippingDate = orderDTO.getShippingDate();
        if(shippingDate == null || shippingDate.before(new Date())) {
            throw new DataNotFoundException("Date must be at least today!");
        }
        order.setActive(true);
        orderRepository.save(order);
        return modelMapper.map(order, OrderResponse.class);
    }

    @Override
    public OrderResponse getOrder(Long id) {
        return null;
    }

    @Override
    public OrderResponse updateOrder(Long id, OrderDTO orderDTO) {
        return null;
    }

    @Override
    public void deleteOrder(Long id) {
        return null;
    }

    @Override
    public List<OrderResponse> getAllOrders(Long userId) {
        return null;
    }

}
```

---

## Cotroller

- OrderController.java

```java
@RestController
@RequestMapping("${api.prefix}/orders")
public class OrderController {
    @PostMapping("")
    public ResponseEntity<?> createOrder(@Valid @RequestBody OrderDTO order, BindingResult result) {
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            return ResponseEntity.ok("create order successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{user_id}")
    public ResponseEntity<?> getOrders(@Valid @PathVariable("user_id") Long userId) {
        try {
            return ResponseEntity.ok(String.format("get orders by user_id = %d", userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrder(@Valid @PathVariable long id, @Valid @RequestBody OrderDTO order) {
        try {
            return ResponseEntity.ok(String.format("Update order with ID = %d successfully.", id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@Valid @PathVariable long id) {
        try {
            return ResponseEntity.ok(String.format("Delete order with ID = %d successfully.", id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
```

---
