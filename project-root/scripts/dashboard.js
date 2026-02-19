import { getRecords } from "./state.js";

document.addEventListener("DOMContentLoaded", () => {
  const statsDiv = document.getElementById("stats");

  function renderDashboard() {
    const records = getRecords();

    // Total records
    const totalRecords = records.length;

    // Total amount
    const totalAmount = records.reduce((sum, r) => sum + r.amount, 0);

    // Top category
    const categoryCounts = {};
    records.forEach(r => {
      categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
    });
    const topCategory = Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

    // Last 7 days trend
    const today = new Date();
    const last7 = Array(7).fill(0);
    records.forEach(r => {
      const d = new Date(r.date);
      const diff = Math.floor((today - d) / (1000 * 60 * 60 * 24));
      if (diff >= 0 && diff < 7) {
        last7[6 - diff] += r.amount; // reverse order (oldest → newest)
      }
    });

    // Render HTML
    statsDiv.innerHTML = `
      <p>Total Records: ${totalRecords}</p>
      <p>Total Amount: $${totalAmount.toFixed(2)}</p>
      <p>Top Category: ${topCategory}</p>
      <div class="trend-chart">
        ${last7.map(val => `<div class="bar" style="height:${val}px" title="$${val.toFixed(2)}"></div>`).join("")}
      </div>
    `;
  }

  renderDashboard();
});