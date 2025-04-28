const data = {
    week1: [
        { id: 1, content: "Làm quen với cấu trúc TOEIC, luyện Listening Part 1-2." },
        { id: 2, content: "Luyện Reading Part 5 (Danh từ, Tính từ), học từ vựng cơ bản." },
        { id: 3, content: "Luyện Listening Part 3-4, từ vựng về các chủ đề công sở." },
        { id: 4, content: "Luyện ngữ pháp các thì cơ bản, làm bài Reading Part 5-6." },
        { id: 5, content: "Ôn lại ngữ pháp cơ bản, luyện Listening Part 1-2." },
        { id: 6, content: "Luyện Reading Part 7 (Đọc đoạn đơn ngắn), ôn từ vựng." },
        { id: 7, content: "Làm bài Listening & Reading mini test." }
    ],
    week2: [
        { id: 1, content: "Luyện Listening Part 3 (Chọn tiêu đề đúng), làm bài Reading Part 7 (Đoạn đôi)." },
        { id: 2, content: "Luyện Listening Part 4 (Biểu đồ, Graphic), làm bài Reading Part 6 (Điền từ)." },
        { id: 3, content: "Làm đề Listening Part 3-4, luyện ngữ pháp các câu điều kiện." },
        { id: 4, content: "Luyện Listening Part 2 nâng cao, làm bài Reading Part 5-6." },
        { id: 5, content: "Ôn từ vựng, luyện Listening Part 3-4 (tăng tốc độ)." },
        { id: 6, content: "Luyện Reading Part 7 (Đoạn ba), luyện từ vựng về chủ đề tài chính." },
        { id: 7, content: "Làm full test Listening & Reading, chấm điểm." }
    ],
    week3: [
        { id: 1, content: "Luyện Listening Part 2 nâng cao (Bẫy từ đồng âm), làm bài Reading Part 5 (Từ loại nâng cao)." },
        { id: 2, content: "Luyện Listening Part 3-4 (Mẹo nghe nhanh), luyện Reading Part 6 (Chọn câu phù hợp)." },
        { id: 3, content: "Làm bài Listening Part 3-4 dưới thời gian quy định, luyện Reading Part 7 (Đoạn đôi dài)." },
        { id: 4, content: "Luyện Listening Part 4 (Phân tích biểu đồ), luyện ngữ pháp (Collocations)." },
        { id: 5, content: "Luyện Listening & Reading mini test, luyện từ vựng các cụm từ trong công sở." },
        { id: 6, content: "Làm đề Listening Part 3-4 nâng cao, luyện Reading Part 5-6." },
        { id: 7, content: "Ôn tập ngữ pháp, làm full test Listening & Reading." }
    ],
    week4: [
        { id: 1, content: "Làm full test 1 (Listening + Reading), phân tích lỗi sai." },
        { id: 2, content: "Lặp lại Listening và Reading phần sai, kiểm tra từ vựng." },
        { id: 3, content: "Làm lại bài sai trong Listening Part 3-4, ôn Reading Part 7." },
        { id: 4, content: "Làm full test 2 (ETS Test 2), phân tích tiến độ." },
        { id: 5, content: "Luyện Listening Part 3-4 (Tăng tốc độ), làm bài Reading Part 7." },
        { id: 6, content: "Ôn tất cả các cấu trúc trong Part 5, luyện Listening Part 2." },
        { id: 7, content: "Làm full test Listening & Reading, tổng hợp tiến độ." }
    ],
    week5: [
        { id: 1, content: "Luyện Listening Part 2 (Mẹo nghe), luyện Reading Part 5 (Từ vựng)." },
        { id: 2, content: "Luyện Listening Part 3-4 (Tăng cường phản xạ), luyện Reading Part 6." },
        { id: 3, content: "Làm bài Listening Part 3-4, luyện Reading Part 7 dài." },
        { id: 4, content: "Luyện Listening Part 4 (Bẫy từ), luyện từ vựng và ngữ pháp." },
        { id: 5, content: "Ôn từ vựng, luyện Listening Part 1-4 nâng cao." },
        { id: 6, content: "Luyện Listening Part 3-4 (Thực hành với tốc độ cao)." },
        { id: 7, content: "Làm full test Listening & Reading (Thực chiến)." }
    ],
    week6: [
        { id: 1, content: "Luyện Listening Part 1-4, làm lại bài sai trong đề thi." },
        { id: 2, content: "Luyện Listening Part 3-4, làm bài Reading Part 5-7." },
        { id: 3, content: "Luyện Reading Part 5-7 dài, cải thiện tốc độ đọc." },
        { id: 4, content: "Ôn tập tất cả các phần ngữ pháp, làm bài test từ vựng." },
        { id: 5, content: "Luyện Listening & Reading Part 3-4, làm lại các đề khó." },
        { id: 6, content: "Luyện Reading Part 5-7, cải thiện tốc độ giải quyết câu hỏi." },
        { id: 7, content: "Làm bài full test Listening & Reading, kiểm tra kết quả tiến bộ." }
    ],
    week7: [
        { id: 1, content: "Làm bài Listening Part 1-4, luyện kỹ năng phản xạ." },
        { id: 2, content: "Luyện Reading Part 5-7, làm lại bài sai." },
        { id: 3, content: "Luyện Listening Part 3-4, phân tích các câu hỏi sai." },
        { id: 4, content: "Làm bài Listening & Reading (dưới thời gian giới hạn)." },
        { id: 5, content: "Ôn từ vựng, luyện Reading Part 7 dài." },
        { id: 6, content: "Luyện Listening Part 4, làm bài Reading Part 6." },
        { id: 7, content: "Tổng hợp tất cả các phần, luyện nghe và đọc theo thời gian." }
    ],
    week8: [
        { id: 1, content: "Luyện Listening Part 1-4 (Thực chiến)." },
        { id: 2, content: "Luyện Reading Part 5-7 (Dài và khó)." },
        { id: 3, content: "Luyện Listening & Reading (Tăng tốc độ)." },
        { id: 4, content: "Làm full test Listening & Reading (có timer)." },
        { id: 5, content: "Ôn từ vựng, làm bài Listening Part 1-2." },
        { id: 6, content: "Luyện Reading Part 5-7 (Phân tích kết quả)." },
        { id: 7, content: "Làm bài test cuối cùng, tổng hợp và chuẩn bị cho kỳ thi TOEIC thật." }
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