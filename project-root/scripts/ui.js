// Show text in an element
export const showMsg = (id, txt) => {
  const spot = document.getElementById(id);
  if (spot) spot.textContent = txt;
};

// Clear element
export const clearStuff = id => {
  const spot = document.getElementById(id);
  if (spot) spot.textContent = "";
};

// Format money
export const cashify = (num, sign) => sign + num.toFixed(2);

// Format date YYYY-MM-DD → DD/MM/YYYY
export const dateFlip = d => {
  const bits = d.split("-");
  return `${bits[2]}/${bits[1]}/${bits[0]}`;
};

// Update dashboard
export const statsUp = (count, sum, champ, sign) => {
  showMsg("total-records", "Records: " + count);
  showMsg("total-amount", "Amount: " + cashify(sum, sign));
  showMsg("top-category", "Top Cat: " + champ);
};

// Announce settings
export const shoutSettings = (place, sign) => {
  showMsg("settings-msg", "Saved: " + place + " (" + sign + ")");
};