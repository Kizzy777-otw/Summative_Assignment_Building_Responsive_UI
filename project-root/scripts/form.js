import { addRecord } from "./state.js";
import { showMessage } from "./ui.js";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("record-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const desc = document.getElementById("desc").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const category = document.getElementById("category").value.trim();
    const date = document.getElementById("date").value.trim();

    if (!desc || !amount || !category || !date) {
      showMessage("form-errors", "Please fill all fields.");
      return;
    }

    addRecord({ description: desc, amount: amount, category: category, date: date });
    form.reset();
    showMessage("form-errors", "Record added!");
  });
});