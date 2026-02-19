import { getRecords, deleteRecord } from "./state.js";

document.addEventListener("DOMContentLoaded", function() {
  const tableBody = document.querySelector("#records-table tbody");
  const searchInput = document.getElementById("search");

  function showRecords(list) {
    tableBody.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
      const r = list[i];
      const row = document.createElement("tr");
      row.innerHTML = "<td>" + r.description + "</td>" +
                      "<td>" + r.amount + "</td>" +
                      "<td>" + r.category + "</td>" +
                      "<td>" + r.date + "</td>" +
                      "<td><button data-id='" + r.id + "'>Delete</button></td>";
      tableBody.appendChild(row);
    }
  }

  showRecords(getRecords());

  searchInput.addEventListener("input", function() {
    const term = searchInput.value.toLowerCase();
    const filtered = getRecords().filter(r => r.description.toLowerCase().includes(term));
    showRecords(filtered);
  });

  tableBody.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      deleteRecord(e.target.dataset.id);
      showRecords(getRecords());
    }
  });
});