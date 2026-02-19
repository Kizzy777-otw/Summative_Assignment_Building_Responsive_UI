import { addRecord } from "./state.js";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("record-form");
  const errorsDiv = document.getElementById("form-errors");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    errorsDiv.textContent = "";

    const desc = document.getElementById("desc").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const category = document.getElementById("category").value.trim();
    const date = document.getElementById("date").value.trim();

    // Regex checks (simple beginner style)
    const descOk = /^\S.*\S$/.test(desc);
    const amountOk = /^[0-9]+(\.[0-9]{1,2})?$/.test(amount);
    const categoryOk = /^[A-Za-z ]+$/.test(category);
    const dateOk = /^\d{4}-\d{2}-\d{2}$/.test(date);

    if (!descOk || !amountOk || !categoryOk || !dateOk) {
      errorsDiv.textContent = "Please enter valid values.";
      return;
    }

    addRecord({ description: desc, amount: amount, category: category, date: date });
    form.reset();
    errorsDiv.textContent = "Record added!";
  });
});