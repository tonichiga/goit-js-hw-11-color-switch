import colors from "./colors.js";

const refs = {
  startBtnRef: document.querySelector(`button[data-action="start"]`),
  stopBtnRef: document.querySelector(`button[data-action="stop"]`),
  bodyRef: document.querySelector("body"),
};
let id = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtnRef.addEventListener("click", (e) => {
  let filterElement = "";
  if (id === null) {
    refs.startBtnRef.disabled = true;
    refs.stopBtnRef.disabled = false;

    const startChangeColor = function (element) {
      refs.bodyRef.style.backgroundColor = element.split(" ");
    };

    id = setInterval(() => {
      colors.forEach((element, index, array) => {
        if (index === randomIntegerFromInterval(0, colors.length - 1)) {
          filterElement = element;
        }
      });
      startChangeColor(filterElement);
    }, 1000);
  } else if (id !== null) {
    console.log(id);
    console.log("ОТКАЗ");
  }
});

refs.stopBtnRef.addEventListener("click", (e) => {
  clearInterval(id);
  id = null;

  refs.startBtnRef.disabled = false;
  refs.stopBtnRef.disabled = true;
});
