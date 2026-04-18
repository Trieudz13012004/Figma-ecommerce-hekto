const items = document.querySelectorAll(".home-nav-item");

// lấy tên file hiện tại
let currentPage = window.location.pathname.split("/").pop();

// fix nếu là /
if (currentPage === "") {
  currentPage = "home-page.html";
}

items.forEach(item => {
  const link = item.querySelector("a");
  const href = link.getAttribute("href");

  // lấy tên file từ href
  const targetPage = href.split("/").pop();

  if (targetPage === currentPage) {
    item.classList.add("active");
  }
});