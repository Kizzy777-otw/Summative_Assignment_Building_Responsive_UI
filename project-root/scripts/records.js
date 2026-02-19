import { getRecords, deleteRecord } from "./state.js";
import { formatAmount, formatDate } from "./ui.js";

document.addEventListener("DOMContentLoaded", function() {
  const tableBody = document.querySelector("#records-table tbody");

  function showRecords(list) {
    tableBody.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
      const r = list[i];
      const row = document.createElement("tr");
      row.innerHTML = "<td>" + r.description + "</td>" +
                      "<td>" + formatAmount(r.amount) + "</td>" +
                      "<td>" + r.category + "</td>" +
                      "<td>" + formatDate(r.date) + "</td>" +
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