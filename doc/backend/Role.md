# Role

## Entity

- Role.java

```java
@Entity
@Table(name = "roles")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;
}
```

---

## Repository

- RoleRepository.java

```java
public interface RoleRepository extends JpaRepository<Role, Long> {}
```

---
