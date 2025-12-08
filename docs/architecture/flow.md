### Component chuẩn cho Shopee Flow

1. ProductListComponent

Hiển thị danh sách sản phẩm.

Có nút Add to Cart hoặc Buy Now.

Gọi API: GET /products.

2. ProductDetailComponent

Trang chi tiết sản phẩm.

Có nút Add to Cart và Buy Now.

Gọi API: GET /products/:id.

3. AddToCartGuard (hoặc AuthGuard)

Khi user ấn Add to Cart:

Nếu đã login → cho add.

Nếu chưa login → chuyển tới /login.

Không phải 1 trang, mà là logic guard chặn route hoặc action.

4. CartComponent

Hiển thị giỏ hàng.

Cho chỉnh sửa số lượng, xóa.

Cho button: Checkout.

Gọi API: GET /cart, PATCH /cart.

5. LoginComponent

Form đăng nhập.

Redirect về trang checkout nếu login từ “Add to Cart”.

6. CheckoutComponent

Nhập địa chỉ, chọn phương thức thanh toán.

Tóm tắt đơn hàng.

Button Confirm Order.

Gọi API: GET /checkout-info.

7. ConfirmOrderComponent

Xác nhận final trước khi submit đơn hàng.

Thông tin: địa chỉ, tổng tiền, sản phẩm.

Button Place Order.

Gọi API: POST /orders.

8. OrderSuccessComponent

Hiển thị kết quả "Đặt hàng thành công".

Gọi API: GET /orders/:id (optional).

Cho nút: View Order.

9. OrderHistoryComponent

Danh sách đơn đã đặt.

Gọi API: GET /orders.

### Tóm tắt mapping vào Shopee flow:

Browse → Add to Cart or Buy → [If NOT logged in → Login] → Checkout → Confirm Order → Done
Step Component
Browse ProductListComponent
Chi tiết sản phẩm (optional) ProductDetailComponent
Add to Cart / Buy ProductDetailComponent + AddToCartGuard
Login nếu chưa login LoginComponent
Checkout CheckoutComponent
Confirm Order ConfirmOrderComponent
Done OrderSuccessComponent

### Routing chuẩn cho Shopee

/products → ProductList
/products/:id → ProductDetail
/login → Login
/cart → Cart
/checkout → Checkout (có guard bắt login)
/confirm-order → ConfirmOrder
/order-success/:id → OrderSuccess
/orders → OrderHistory
