function getMenuItems() {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => console.log(item.dataset["file"]));
  menuItems.forEach((item) => console.log(item.parentElement.tagName));
  return menuItems;
}

function clickMenu(containerStr) {
  const container = document.querySelector(containerStr);
}

function loadHtml(filepath) {
  const container = document.querySelector(".page");
  fetch(filepath)
    .then((response) => response.text())
    .then((html) => {
      container.innerHTML = html;
    });
}

function select(menu, target) {
  const menuItems = getMenuItems();
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
  target.classList.add("active");
}

getMenuItems();
const menu = document.querySelector("#menu");
menu.addEventListener("click", (evt) => {
  select(evt.currentTarget, evt.target);
  loadHtml(evt.target.dataset["file"]);
});

console.log(menu);
function initializePage() {
  loadHtml(menu.firstElementChild.firstElementChild.dataset["file"]);
}

// Inicializa a página
initializePage();
