- ProductResponse.java

```java
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse extends BaseResponse {
    private String name;
    private Float price;
    private String thumbnail;
	private String description;

	@JsonProperty("category_id")
	private Long categoryId;
}
```

---

- ProductListResponse.java

```java
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductListResponse {
    private List<ProductResponse> products;
    private int totalPages;
}
```

---

- BaseResponse.java

```java
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperClass
public class BaseResponse {
    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    @JsonProperty("updated_at")
    private LocalDateTime updatedAt;
}
```
