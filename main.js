import "./src/scss/main.scss";
import { checkValue, isValidDate } from "./src/js/app";
import calculateAge from "./src/js/calculateAge";

const form = document.querySelector("form");
const formBlocks = document.querySelectorAll(".block");
const OutputYear = document.querySelector("#output-year");
const OutputMonth = document.querySelector("#output-month");
const OutputDay = document.querySelector("#output-day");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkValue(formBlocks) && isValidDate(form.month.value, form.day.value, form.year.value)) {
    calculateAge(form.month.value, form.day.value, form.year.value, [
      OutputYear,
      OutputMonth,
      OutputDay,
    ]);
    form.reset()
  }
});