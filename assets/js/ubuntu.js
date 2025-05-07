// Gắn sự kiện click cho các menu
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        loadPage(url);
    });
});

// Hàm load nội dung vào main-content
function loadPage(url) {
    const container = document.getElementById('main-content');
    // 👇 Hiển thị loading trước khi fetch
    container.innerHTML = `
    <div class="d-flex justify-content-center align-items-center" style="min-height: 200px;">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Đang tải...</span>
      </div>
    </div>
  `;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Không thể tải nội dung.');
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
        })
        .catch(error => {
            container.innerHTML = '<p class="text-danger">Lỗi khi tải trang.</p>';
            console.error(error);
        });
}

// Tải mặc định "Trang chủ" khi trang vừa load
document.addEventListener('DOMContentLoaded', function () {
    loadPage('pages/ubuntu/whatisubuntu.html');
});