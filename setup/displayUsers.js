import get from "./get.js";

const displayUsers = (users) => {
  const userContainer = get(".user-container");
  userContainer.innerHTML = users
    .map((each) => {
      const { login: name, avatar_url: img, url } = each;
      return `<article class="single-user">
        <img src="${img}" class="user-img" alt="">
        <h3 class="user-name"> ${name}</h3>
        <a href="${url}"><button class="user-profile btn ">view profile</button></a>
      </article>`;
    })
    .join("");
};

export default displayUsers;
