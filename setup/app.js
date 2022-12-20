import fetchUsers from "./fetchUsers.js";
import displayUsers from "./displayUsers.js";
import get from "./get.js";
import displayButtons from "./displayButtons.js";

window.addEventListener("load", async () => {
  const users = await fetchUsers();
  const title = get(".title");
  let currentInd = 0;
  title.textContent = "Pagination";
  const perPage = 10;
  const pages = Math.ceil(users.length / perPage);
  displayButtons(pages);
  const pageBtn = [...document.querySelectorAll(".btn-page")];
  const next = get(".btn-next");
  const prev = get(".btn-prev");
  displayUsers(users.slice(0, perPage));
  pageBtn[0].classList.add("active");
  // ===== display by page numbers====//
  pageBtn.forEach((each, index) => {
    each.addEventListener("click", () => {
      currentInd = index;
      getpage(currentInd);
    });
  });
//  ===== display by next =====//
  next.addEventListener("click", () => {
    currentInd++;
    if (currentInd === pages) {
      currentInd = 0;
    }
    getpage(currentInd);
  });

  // ===== display by previous =====//
  prev.addEventListener("click", () => {
    currentInd--;
    if (currentInd < 0) {
      currentInd = pages - 1;
    }
    getpage(currentInd);
  });
  // ===== function getpage =====//
  const getpage = (currentInd) => {
    let strtInd = currentInd * perPage;
    let endInd = strtInd + perPage;
    displayUsers(users.slice(strtInd, endInd));
    pageBtn.forEach((item) => {
      item.classList.remove("active");
    });
    pageBtn[currentInd].classList.add("active");
  };
});

