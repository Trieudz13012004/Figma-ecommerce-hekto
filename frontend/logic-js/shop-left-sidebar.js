function handleToggle(groupSelector, itemSelector, activeClass) {
  document.querySelectorAll(groupSelector).forEach(group => {
    const items = group.querySelectorAll(itemSelector);

    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle(activeClass);
      });
    });
  });
}
handleToggle(".infor-unit1", ".check", "check1-active");
handleToggle(".infor-unit2", ".check2", "check4-active");
handleToggle(".infor-unit4", ".check4", "check4-active");
handleToggle(".infor-unit5", ".check4", "check4-active");
handleToggle(".infor-unit3", ".check3", "check3-active");