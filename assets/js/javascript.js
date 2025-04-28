const data = {
    week1: [
        { id: 1, content: "Giới thiệu web, cấu trúc HTML5" },
        { id: 2, content: "Thực hành tạo giao diện HTML" },
        { id: 3, content: "Hiểu CSS Selector, Box Model" },
        { id: 4, content: "Thực hành CSS Layout: Flexbox" },
        { id: 5, content: "CSS Grid Layoutp" },
        { id: 6, content: "Thực hành tạo trang web với HTML, CSS" },
        { id: 7, content: "Thực hành tạo trang web với HTML, CSS" }
    ],
    week2: [
        { id: 1, content: "Giới thiệu sơ lược về JavaScript" },
        { id: 2, content: "Giới thiệu biến, kiểu dữ liệu trong JS" },
        { id: 3, content: "Luyện tập biến và kiểu dữ liệu" },
        { id: 4, content: "Vòng lặp, if else trong JS" },
        { id: 5, content: "Vòng lặp, if else trong JS" },
        { id: 6, content: "Luyện tập JS cơ bản" },
        { id: 7, content: "Luyện bài JS cơ bản" }
    ],
    week3: [
        { id: 1, content: "Hiểu DOM Manipulation" },
        { id: 2, content: "Xử lý sự kiện với JS (click, input)" },
        { id: 3, content: "Luyện tập Array methods: map, filter" },
        { id: 4, content: "Luyện reduce, find, some" },
        { id: 5, content: "Hiểu Callback, Promise trong JS" },
        { id: 6, content: "Async/Await" },
        { id: 7, content: "Luyện bài JS tổng hợp" }
    ],
    week4: [
        { id: 1, content: "Cài Git, commit, push lên GitHub" },
        { id: 2, content: "Clone repo, pull request" },
        { id: 3, content: "Tạo repo GitHub và publish code lên GitHub" },
        { id: 4, content: "Thực hành Git & Github" },
        { id: 5, content: "Thực hành Git & Github" },
        { id: 6, content: "Thực hành Git & Github" },
        { id: 7, content: "Thực hành Git & Github" }
    ],
    week5: [
        { id: 1, content: "Hiểu JSX, Component trong React" },
        { id: 2, content: "JSX trong React" },
        { id: 3, content: "Component trong React" },
        { id: 4, content: "Hiểu Props và State trong React" },
        { id: 5, content: "Props trong React" },
        { id: 6, content: "State trong React" },
        { id: 7, content: "Luyện tập" }
    ],
    week6: [
        { id: 1, content: "Event Handling trong React" },
        { id: 2, content: "Event Handling trong React" },
        { id: 3, content: "Fetch API trong React" },
        { id: 4, content: "Fetch API trong React" },
        { id: 5, content: "React Router (cài và dùng)" },
        { id: 6, content: "Build project mini với React" },
        { id: 7, content: "Build project mini với React" }
    ],
    week7: [
        { id: 1, content: "Context API" },
        { id: 2, content: "Context API" },
        { id: 3, content: "Custom Hook trong React" },
        { id: 4, content: "Hiểu lifecycle methods (useEffect)" },
        { id: 5, content: "Form validation với Formik + Yup" },
        { id: 6, content: "Ôn tập React toàn bộ" },
        { id: 7, content: "Ôn tập React toàn bộ" }
    ],
    week8: [
        { id: 1, content: "Cài Node.js và Express.js" },
        { id: 2, content: "Tạo server Express API GET, POST" },
        { id: 3, content: "Middleware trong Express" },
        { id: 4, content: "Xây dựng API PUT, DELETE" },
        { id: 5, content: "CRUD API hoàn chỉnh" },
        { id: 6, content: "CRUD API hoàn chỉnh" },
        { id: 7, content: "CRUD API hoàn chỉnh" }
    ],
    week9: [
        { id: 1, content: "Giới thiệu và cài đặt MongoDB" },
        { id: 2, content: "CRUD với MongoDB" },
        { id: 3, content: "CRUD với MongoDB" },
        { id: 4, content: "CRUD với MongoDB" },
        { id: 5, content: "CRUD với MongoDB" },
        { id: 6, content: "Kết nối MongoDB với NodeJS" },
        { id: 7, content: "Kết nối MongoDB với NodeJS" }
    ],
    week10: [
        { id: 1, content: "Tổng hợp backend CRUD project" },
        { id: 2, content: "Cài bcrypt, hash password" },
        { id: 3, content: "Cài JWT authentication" },
        { id: 4, content: "Bảo vệ Route với JWT" },
        { id: 5, content: "Bảo vệ Route với JWT" },
        { id: 6, content: "Bảo vệ Route với JWT" },
        { id: 7, content: "Hoàn thiện authentication project" }
    ],
    week11: [
        { id: 1, content: "Cài Docker và Dockerize backen" },
        { id: 2, content: "Cài Vercel/Netlify deploy frontend" },
        { id: 3, content: "Cài Vercel/Netlify deploy frontend" },
        { id: 4, content: "Deploy backend trên Render/Server" },
        { id: 5, content: "Kết nối Front-End và Back-End trên Internet" },
        { id: 6, content: "Lên ý tưởng app dự án fullstack" },
        { id: 7, content: "Lên ý tưởng app dự án fullstack" }
    ],
    week12: [
        { id: 1, content: "Làm Back-End cho project fullstack" },
        { id: 2, content: "Làm Back-End cho project fullstack" },
        { id: 3, content: "Làm Front-End cho project fullstack" },
        { id: 4, content: "Làm Front-End cho project fullstack" },
        { id: 5, content: "Hoàn thiện chức năng CRUD trong app" },
        { id: 6, content: "Viết README chuẩn trên Github" },
        { id: 7, content: "Review và deploy hoàn chỉnh dự án" }
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