# Exceptions

- Create exceptions package
- Create DataNotFoundException class

## DataNotFoundException

- DataNotFoundException.java

```java
public class DataNotFoundException extends Exception {
    public DataNotFoundException (String message) {
        super(message);
    }
}
```

---

## InvalidParamException

- InvalidParamException.java

```java
public class InvalidParamException extends Exception {
    public InvalidParamException(String message) {
        super(message);
    }
}
```
