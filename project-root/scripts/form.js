import { addRecord } from "./state.js";
import { validateDescription, validateAmount, validateCategory, validateDate } from "./validators.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("record-form");
  const errorsDiv = document.getElementById("form-errors");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorsDiv.textContent = ""; // clear old errors

    const desc = document.getElementById("desc").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const category = document.getElementById("category").value.trim();
    const date = document.getElementById("date").value.trim();

    // Run regex validations
    const errors = [];
    if (!validateDescription(desc)) errors.push("Invalid description.");
    if (!validateAmount(amount)) errors.push("Invalid amount.");
    if (!validateCategory(category)) errors.push("Invalid category.");
    if (!validateDate(date)) errors.push("Invalid date format.");

    if (errors.length > 0) {
      errorsDiv.textContent = errors.join(" ");
      return;
    }

    // Add record to state/localStorage
    addRecord({ description: desc, amount, category, date });

    // Reset form
    form.reset();
    errorsDiv.textContent = "Record added successfully!";
  });
});
