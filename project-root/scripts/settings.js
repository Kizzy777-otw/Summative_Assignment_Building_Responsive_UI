import { announceSettings } from "./ui.js";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("settings-form");
  const countrySelect = document.getElementById("country");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const option = countrySelect.options[countrySelect.selectedIndex];
    const country = option.value;
    const rate = parseFloat(option.dataset.rate);

    localStorage.setItem("finance:settings", JSON.stringify({
      country: country,
      rate: rate
    }));

    announceSettings(country, rate);
  });
});