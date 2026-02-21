// Showing  message in the element targeted
export function showMessage(id, text) {
  const el = document.getElementById(id);
   if (el) el.textContent = text;
}

// Clearing  element content
export function clearContent(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = "";
}

// Format the amount also with currency symbol 
export function formatAmount(num, symbol) {
  return symbol + num.toFixed(2);
}

// changing date format (YYYY-MM-DD → DD/MM/YYYY)
export function formatDate(dateStr) {
   const parts = dateStr.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Update  stats on dashboard
export function updateStats(totalRecords, totalAmount, topCategory, symbol) {
  showMessage("total-records", "Total Records: " + totalRecords);
   showMessage("total-amount", "Total Amount: " + formatAmount(totalAmount, symbol));
  showMessage("top-category", "Top Category: " + topCategory);
}

// Announcing the changes in settings to the user
export function announceSettings(country, symbol) {
  showMessage("settings-msg", "Settings saved: " + country + " (" + symbol + ")");
}