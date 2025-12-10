- Create packege configuratuons
- In configurations package, create MapperConfiguration.java

```java
@Configuration
public class MapperConfiguration {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
```

---
