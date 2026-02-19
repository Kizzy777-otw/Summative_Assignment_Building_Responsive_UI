import { getRecords } from "./state.js";
import { showMsg, cashify } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const set = JSON.parse(localStorage.getItem("finance:settings") || "{}");
  const rate = set.rate || 1;
  const sign = set.sign || "$";

  const stash = getRecords();
  let sum = 0;
  let bins = {};

  stash.forEach(r => {
    sum += r.amount * rate;
    bins[r.category] = (bins[r.category] || 0) + 1;
  });

  const champ = Object.keys(bins)[0] || "N/A";

  showMsg("total-records", "Records: " + stash.length);
  showMsg("total-amount", "Amount: " + cashify(sum, sign));
  showMsg("top-category", "Top Cat: " + champ);
});