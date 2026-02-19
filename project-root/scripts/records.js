import { getRecords, deleteRecord } from "./state.js";
import { cashify } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const set = JSON.parse(localStorage.getItem("finance:settings") || "{}");
  const rate = set.rate || 1;
  const sign = set.sign || "$";

  const body = document.querySelector("#records-table tbody");

  const paint = list => {
    body.innerHTML = "";
    list.forEach(r => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${r.description}</td>
        <td>${cashify(r.amount * rate, sign)}</td>
        <td>${r.category}</td>
        <td>${r.date}</td>
        <td><button data-id="${r.id}">Delete</button></td>`;
      body.appendChild(row);
    });
  };

  paint(getRecords());

  body.onclick = e => {
    if (e.target.tagName === "BUTTON") {
      deleteRecord(e.target.dataset.id);
      paint(getRecords());
    }
  };
});