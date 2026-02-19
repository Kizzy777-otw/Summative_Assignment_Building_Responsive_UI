import { getRecords, deleteRecord } from "./state.js";
import { formatAmount } from "./ui.js";

document.addEventListener("DOMContentLoaded", function() {
  const settings = JSON.parse(localStorage.getItem("finance:settings") || "{}");
  const rate = settings.rate || 1;
  const symbol = settings.symbol || "$";

  const tableBody = document.querySelector("#records-table tbody");

  function showRecords(list) {
    tableBody.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
      const r = list[i];
      const converted = r.amount * rate;
      const row = document.createElement("tr");
      row.innerHTML = "<td>" + r.description + "</td>" +
                      "<td>" + formatAmount(converted, symbol) + "</td>" +
                      "<td>" + r.category + "</td>" +
                      "<td>" + r.date + "</td>" +
                      "<td><button data-id='" + r.id + "'>Delete</button></td>";
      tableBody.appendChild(row);
    }
  }

  showRecords(getRecords());

  tableBody.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      deleteRecord(e.target.dataset.id);
      showRecords(getRecords());
    }
  });
});