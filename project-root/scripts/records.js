import { getRecords, deleteRecord, editRecord } from "./state.js";
import { compileRegex, highlight } from "./search.js";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#records-table tbody");
  const searchInput = document.getElementById("search");

  // Render all records
  function render(records) {
    tableBody.innerHTML = "";
    records.forEach(record => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${record.description}</td>
        <td>${record.amount.toFixed(2)}</td>
        <td>${record.category}</td>
        <td>${record.date}</td>
        <td>
          <button class="edit" data-id="${record.id}">Edit</button>
          <button class="delete" data-id="${record.id}">Delete</button>
        </td>
      `;

      tableBody.appendChild(row);
    });
  }

  // Initial render
  render(getRecords());

  // Search with regex
  searchInput.addEventListener("input", () => {
    const pattern = searchInput.value;
    const re = compileRegex(pattern, "i");
    const records = getRecords();

    tableBody.innerHTML = "";
    records.forEach(record => {
      let desc = record.description;
      if (re) desc = highlight(desc, re);

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${desc}</td>
        <td>${record.amount.toFixed(2)}</td>
        <td>${record.category}</td>
        <td>${record.date}</td>
        <td>
          <button class="edit" data-id="${record.id}">Edit</button>
          <button class="delete" data-id="${record.id}">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  });

  // Handle delete
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const id = e.target.dataset.id;
      deleteRecord(id);
      render(getRecords());
    }
  });

  // Handle edit (simple inline prompt for now)
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
      const id = e.target.dataset.id;
      const newDesc = prompt("Enter new description:");
      if (newDesc) {
        editRecord(id, { description: newDesc });
        render(getRecords());
      }
    }
  });
});