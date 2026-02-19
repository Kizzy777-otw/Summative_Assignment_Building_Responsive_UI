// Show a message in a target element
export function showMessage(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Clear content of an element
export function clearContent(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = "";
}

// Format amount with currency symbol
export function formatAmount(num, symbol) {
  return symbol + num.toFixed(2);
}

// Format date (YYYY-MM-DD → DD/MM/YYYY)
export function formatDate(dateStr) {
  const parts = dateStr.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Update dashboard stats
export function updateStats(totalRecords, totalAmount, topCategory, symbol) {
  showMessage("total-records", "Total Records: " + totalRecords);
  showMessage("total-amount", "Total Amount: " + formatAmount(totalAmount, symbol));
  showMessage("top-category", "Top Category: " + topCategory);
}

// Announce settings changes
export function announceSettings(country, symbol) {
  showMessage("settings-msg", "Settings saved: " + country + " (" + symbol + ")");
}