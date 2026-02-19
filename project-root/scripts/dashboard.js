import { getRecords } from "./state.js";
import { showMessage, formatAmount } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("finance:settings") || "{}");
  const rate = settings.rate || 1;
  const symbol = settings.symbol || "$";

  const records = getRecords();
  let total = 0;
  let categories = {};

  records.forEach(r => {
    total += r.amount * rate;
    categories[r.category] = (categories[r.category] || 0) + 1;
  });

  const topCategory = Object.keys(categories)[0] || "N/A";

  showMessage("total-records", "Total Records: " + records.length);
  showMessage("total-amount", "Total Amount: " + formatAmount(total, symbol));
  showMessage("top-category", "Top Category: " + topCategory);
});