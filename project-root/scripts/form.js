import { addRecord } from "./state.js";
import { showMsg } from "./ui.js";

 document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("record-form");

   form.onsubmit = e => {
    e.preventDefault();

      const desc = document.getElementById("desc").value.trim();
    const cash = document.getElementById("amount").value.trim();
     const tag = document.getElementById("category").value.trim();
      const day = document.getElementById("date").value.trim();

    if (!desc || !cash || !tag || !day) {
        showMsg("form-errors", "Fill all the blanks!");
      return;
    }

     addRecord({ description: desc, amount: cash, category: tag, date: day });
    form.reset();
      showMsg("form-errors", "Boom! Record added.");
  };
});