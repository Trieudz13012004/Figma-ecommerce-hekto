const items = document.querySelectorAll(".span");

items.forEach(item => {
    item.addEventListener("click", () => {
        // bỏ active tất cả
        items.forEach(i => i.classList.remove("span-active"));

        // add active cho thằng vừa click
        item.classList.add("span-active");
    });
});