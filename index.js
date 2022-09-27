// Importing files
import { updater } from "./smile.js";

const btn = document.querySelector(".btn");
const info = document.querySelector(".info");

btn.addEventListener("click", () => {
  let num = 100;
  const interval = setInterval(() => {
    num--;
    info.style.display = "block";

    if (num < 0) {
      clearInterval(interval);
      info.style.display = "none";
    }
  }, 50);
});
