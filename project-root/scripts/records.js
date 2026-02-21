import { getRecords, deleteRecord } from "./state.js";
 import { formatAmount } from "./ui.js";

 document.addEventListener("DOMContentLoaded", () => {
   const settings = JSON.parse(localStorage.getItem("finance:settings") || "{}");
  const rate = settings.rate || 1;
   const symbol = settings.symbol || "$";

   const tableBody = document.querySelector("#records-table tbody");

   const showRecords = list => {
     tableBody.innerHTML = "";
       list.forEach(r => {
      const row = document.createElement("tr");
          row.innerHTML = `
        <td>${r.description}</td>
         <td>${formatAmount(r.amount * rate, symbol)}</td>
        <td>${r.category}</td>
          <td>${r.date}</td>
        <td><button data-id="${r.id}">Delete</button></td>`;
      tableBody.appendChild(row);
    });
  };

       showRecords(getRecords());

     tableBody.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
       deleteRecord(e.target.dataset.id);
      showRecords(getRecords());
    }
  });
});