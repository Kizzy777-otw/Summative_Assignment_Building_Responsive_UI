import { getRecords } from "./state.js";
import { updateStats } from "./ui.js";

document.addEventListener("DOMContentLoaded", function() {
  const records = getRecords();

  const totalRecords = records.length;
  const totalAmount = records.reduce(function(sum, r) { return sum + r.amount; }, 0);

  const categories = {};
  for (let i = 0; i < records.length; i++) {
    const r = records[i];
    categories[r.category] = (categories[r.category] || 0) + 1;
  }
  const topCategory = Object.keys(categories).sort(function(a, b) {
    return categories[b] - categories[a];
  })[0] || "N/A";

  updateStats({ totalRecords: totalRecords, totalAmount: totalAmount, topCategory: topCategory });
});