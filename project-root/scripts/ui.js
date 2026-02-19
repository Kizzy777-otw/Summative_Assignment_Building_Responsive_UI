// Show a message in a target element
export function showMessage(targetId, text) {
  const el = document.getElementById(targetId);
  if (el) {
    el.textContent = text;
  }
}

// Clear content of an element
export function clearContent(targetId) {
  const el = document.getElementById(targetId);
  if (el) {
    el.textContent = "";
  }
}

// Format amount with 2 decimals
export function formatAmount(num) {
  return "$" + Number(num).toFixed(2);
}

// Format date (YYYY-MM-DD → DD/MM/YYYY)
export function formatDate(dateStr) {
  const parts = dateStr.split("-");
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}