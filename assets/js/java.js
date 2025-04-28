const data = {
    week1: [
        { id: 1, content: "Học các thẻ HTML cơ bản (div, h1, p, a, img)" },
        { id: 2, content: "Làm form HTML: input, select, textarea" },
        { id: 3, content: "Làm quen CSS: màu sắc, font, background" },
        { id: 4, content: "Căn chỉnh bố cục với Flexbox, Box model" },
        { id: 5, content: "Responsive web cơ bản" },
        { id: 6, content: "Học Git: init, add, commit" },
        { id: 7, content: "Push project HTML lên GitHub" }
    ],
    week2: [
        { id: 1, content: "Kiểu dữ liệu, biến, toán tử" },
        { id: 2, content: "Vòng lặp (for, while), if-else" },
        { id: 3, content: "Hàm, mảng, object" },
        { id: 4, content: "DOM: getElementById, innerHTML" },
        { id: 5, content: "Bắt sự kiện (click, submit)" },
        { id: 6, content: "Làm to-do list đơn giản với JS" },
        { id: 7, content: "Ôn tập và đẩy JS lên GitHub" }
    ],
    week3: [
        { id: 1, content: "Cài đặt React, hiểu JSX" },
        { id: 2, content: "Component + Props" },
        { id: 3, content: "useState, sự kiện trong React" },
        { id: 4, content: "useEffect + Fetch API" },
        { id: 5, content: "React Router DOM" },
        { id: 6, content: "Tạo layout, menu, page đơn giản" },
        { id: 7, content: "Ôn tập React và commit lên GitHub" }
    ],
    week4: [
        { id: 1, content: "Tạo To-do App/Blog cơ bản bằng React" },
        { id: 2, content: "Quản lý state, chia component" },
        { id: 3, content: "Xử lý form + validation" },
        { id: 4, content: "Tối ưu UI và trải nghiệm" },
        { id: 5, content: "Gắn icon, CSS nâng cao" },
        { id: 6, content: "Đưa dự án React lên Vercel" },
        { id: 7, content: "Viết README trên GitHub" }
    ],
    week5: [
        { id: 1, content: "Học Java: biến, hàm, class, object" },
        { id: 2, content: "Tính kế thừa, abstract, interface" },
        { id: 3, content: "Cài Spring Boot + Spring Initializr" },
        { id: 4, content: "Tạo REST API GET, POST" },
        { id: 5, content: "Hiểu Controller, Service" },
        { id: 6, content: "Làm API đơn giản: bài viết" },
        { id: 7, content: "Push project Java lên GitHub" }
    ],
    week6: [
        { id: 1, content: "Cài MySQL, tạo database" },
        { id: 2, content: "Kết nối Spring Boot với MySQL (JPA)" },
        { id: 3, content: "Tạo bảng + Entity + Repository" },
        { id: 4, content: "Làm API CRUD" },
        { id: 5, content: "Viết test Postman" },
        { id: 6, content: "Ôn tập Spring + GitHub" },
        { id: 7, content: "Gửi API lên Render" }
    ],
    week7: [
        { id: 1, content: "Cài Spring Security" },
        { id: 2, content: "Đăng ký + đăng nhập" },
        { id: 3, content: "Tạo + verify JWT token" },
        { id: 4, content: "Middleware xác thực người dùng" },
        { id: 5, content: "Bảo vệ route + phân quyền" },
        { id: 6, content: "Test auth với Postman" },
        { id: 7, content: "Push Auth lên GitHub" }
    ],
    week8: [
        { id: 1, content: "Gọi API Spring từ React bằng Axios" },
        { id: 2, content: "CRUD bài viết từ frontend" },
        { id: 3, content: "Upload ảnh (Cloudinary)" },
        { id: 4, content: "Hiển thị dữ liệu + xử lý lỗi" },
        { id: 5, content: "Hiển thị loading + feedback UI" },
        { id: 6, content: "Tối ưu giao tiếp frontend-backend" },
        { id: 7, content: "Kiểm thử tổng thể" }
    ],
    week9: [
        { id: 1, content: "Deploy Spring Boot lên Render" },
        { id: 2, content: "Deploy React lên Vercel" },
        { id: 3, content: "Thiết lập biến môi trường" },
        { id: 4, content: "Fix lỗi CORS" },
        { id: 5, content: "Viết tài liệu cài đặt" },
        { id: 6, content: "Gắn link demo vào GitHub" },
        { id: 7, content: "Ôn tập toàn bộ quy trình" }
    ],
    week10: [
        { id: 1, content: "Thiết kế Portfolio bằng React" },
        { id: 2, content: "Thêm thông tin cá nhân, kỹ năng" },
        { id: 3, content: "Gắn các dự án đã làm" },
        { id: 4, content: "Tối ưu UI đẹp mắt" },
        { id: 5, content: "Viết README chi tiết" },
        { id: 6, content: "Đưa Portfolio lên Vercel" },
        { id: 7, content: "Chia sẻ link Portfolio" }
    ],
    week11: [
        { id: 1, content: "Viết CV lập trình viên" },
        { id: 2, content: "Tạo tài khoản tuyển dụng" },
        { id: 3, content: "Giải 2 bài thuật toán Java" },
        { id: 4, content: "Thuật toán sắp xếp và tìm kiếm" },
        { id: 5, content: "Ôn lại kiến thức backend" },
        { id: 6, content: "Làm mock interview" },
        { id: 7, content: "Nhờ người review CV" }
    ],
    week12: [
        { id: 1, content: "Tìm việc làm Java React tại Hà Nội" },
        { id: 2, content: "Gửi CV ứng tuyển" },
        { id: 3, content: "Viết thư xin việc" },
        { id: 4, content: "Phỏng vấn thật/tập" },
        { id: 5, content: "Ghi lại phản hồi từ nhà tuyển dụng" },
        { id: 6, content: "Cải thiện điểm yếu" },
        { id: 7, content: "Tổng kết và đặt mục tiêu mới" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const table1Rows = document.querySelectorAll("#table1 tbody tr");
    const table2Body = document.getElementById("table2Body");
  
    table1Rows.forEach(row => {
      row.addEventListener("click", () => {
        // Xoá highlight cũ
        table1Rows.forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
  
        const topic = row.dataset.topic;
        const rows = data[topic];
  
        table2Body.innerHTML = rows.map(item => `
          <tr>
            <th scope="col">${item.id}</th>
            <td>${item.content}</td>
            <td class="text-center"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
          </tr>
        `).join("");
      });
    });
  });