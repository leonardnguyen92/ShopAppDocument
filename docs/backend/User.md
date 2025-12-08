# User & UserLogin

## TOC

1. [UserController](#controller)
2. [UserDTO & UserLoginDTO](#dto)
3. [UserEntity](#entity)
4. [UserRepository](#repository)
5. [UserService](#service)

---

## Controller

- UserController.java

```java
@RestController
@RequestMapping("${api.prefix}/users")
@RequiredArgsConstructor
public class UserController {
    private final IUserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserDTO userDTO, BindingResult result) {
        try {
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            if(!userDTO.getPassword().equals(userDTO.getRetypePassword())) {
                return ResponseEntity.badRequest().body("Password does not match");
            }
            userRepository.createUser(userDTO);
            return ResponseEntity.ok("Register successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@Valid @RequestBody UserLoginDTO userLoginDTO) {
        // Kiểm tra thông tin đăng nhập và sinh token
        String token = userService.login(userLoginDTO.getPhoneNumber(), userLoginDTO.getPassword());
        // Trả về token trong response
        return ResponseEntity.ok("some token");
    }
}
```

---

## DTO

- UserDTO.java

```java
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    @JsonProperty("fullname")
    private String fullName;

    @NotBlank(message = "Phone number is required")
    @JsonProperty("phone_number")
    private String phoneNumber;

    private String address;

    @NotBlank(message = "Password cannot be blank")
    private String password;

    @JsonProperty("retype_password")
    private String retypePassword;

    @JsonProperty("date_of_birth")
    private Date dateOfBirth;

    @JsonProperty("facebook_account_id")
    private int facebookAccountId;

    @JsonProperty("google_account_id")
    private int googleAccountId;

    @NotNull(massege = "Role ID is required")
    @JsonProperty("role_id")
    private Long roleId;
}
```

---

- UserLoginDTO.java

```java
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginDTO {
    @NotBlank(message = "Phone number is required")
    @JsonProperty("phone_number")
    private String phoneNumber;

    @NotBlank(message = "Password cannot be blank")
    private String password;
}
```

---

## Entity

- User.java

```java
@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public clas User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fullname", length = 100)
    private String fullName;

    @Column(name = "phone_number",nullable = false, length = 20)
    private String phoneNumber;

    @Column(name = "address", nullable = false, length = 200)
    private String address;

    @Column(name = "password", nullable = false, length = 200)
    private String password;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "active")
    private boolean active;

    @Column(name = "facebook_account_id")
    private int facebookAccountId;

    @Column(name = "google_account_id")
    private int googleAccountId;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
}
```

---

## Repository

- UserRepository.java

```java
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByPhoneNumber(String phoneNumber);
    Optional<User> findByPhoneNumber(String phoneNumber);
}
```

---

## Service

- Interface IUserService.java

```java
public interface IUserService {
    User createUser(UserDTO userDTO);

    String login(String phoneNumber, String password);
}
```

- UserService.java

```java
@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public User createUser(UserDTO userDTO){
        String phoneNumber;
        if(userRepository.existsByPhoneNumber(phoneNumber)) {
            throw new DataIntegrityViolationException("Phone number already exists");
        }
        User newUser = User.builder()
                                .fullname(userDTO.getFullName())
                                .phoneNumber(userDTO.getPhoneNumber())
                                .password(userDTO.getPassword())
                                .address(userDTO.getAddress())
                                .dateOfBirth(userDTO.getDateOfBirth())
                                .facebookAccountId(userDTO.getFacebookAccountId())
                                .googleAccountId(userDTO.getGoogleAccountId())
                                .build();
        Role role = roleRepository.findById(userDTO.getRoleId())
                                .orElseThrow(() -> new DataNotFoundException("Role not found"));
        newUser.setRole(role);
        // Kiểm tra nếu có accountId, không yêu cầu password
        if(userDTO.getFacebookAccountId() == 0 && userDTO.getGoogleAccountId() == 0) {
            String password = userDTO.getPassword();
            // String encodedPassword = passwordEncoder.encode(password);
            // newUser.setPassword(encodedPassword);
        }
        return userRepository.save(newUser);
    }

    @Override
    public String login(String phoneNumber, String password){

        return null;
    }
}
```

---
