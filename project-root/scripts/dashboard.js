import { getRecords } from "./state.js";
import { showMessage, formatAmount } from "./ui.js";

document.addEventListener("DOMContentLoaded", function() {
  const settings = JSON.parse(localStorage.getItem("finance:settings") || "{}");
  const rate = settings.rate || 1;
  const country = settings.country || "USA";

  const records = getRecords();
  let total = 0;
  let categories = {};

  for (let i = 0; i < records.length; i++) {
    total += records[i].amount * rate;
    categories[records[i].category] = (categories[records[i].category] || 0) + 1;
  }

  const topCategory = Object.keys(categories)[0] || "N/A";

  showMessage("total-records", "Total Records: " + records.length);
  showMessage("total-amount", "Total Amount: " + formatAmount(total, country));
  showMessage("top-category", "Top Category: " + topCategory);
});