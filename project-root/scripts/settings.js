import { showMessage } from "./ui.js";

 document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("settings-form");
  const countrySelect = document.getElementById("country");

  form.onsubmit = e => {
    e.preventDefault();

    const option = countrySelect.options[countrySelect.selectedIndex];
     const country = option.value;
    const rate = parseFloat(option.dataset.rate) || 1;
     const symbol = option.dataset.symbol || "$";

    localStorage.setItem("finance:settings", JSON.stringify({
      country,
       rate,
      symbol
    }));

     showMessage("settings-msg", `Settings saved: ${country} (${symbol})`);
  };
});