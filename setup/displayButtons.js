import get from "./get.js";
const displayButtons = (pages) => {
  let arrayButtons = [];
  for (let i = 1; i <= pages; i++) {
    let x = ` <article class="btn btn-page"> ${i} </article> `;
    arrayButtons.push(x);
  }
  // console.log(arrayButtons);
  const btnContainer = get(".btn-container");
  btnContainer.innerHTML = `<article class="btn btn-prev">Prev</article> ${arrayButtons
    .map((each) => {
      return each;
    })
    .join("")}<article class="btn btn-next">Next</article> `;
};
export default displayButtons;
