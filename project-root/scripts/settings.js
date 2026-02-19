import { getRecords } from "./state.js";
import { announceSettings, showMessage } from "./ui.js";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("settings-form");
  const baseCurrencySelect = document.getElementById("base-currency");
  const conversionRateInput = document.getElementById("conversion-rate");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const baseCurrency = baseCurrencySelect.value;
    const conversionRate = conversionRateInput.value || 1;

    localStorage.setItem("finance:settings", JSON.stringify({
      baseCurrency: baseCurrency,
      conversionRate: conversionRate
    }));

    announceSettings(baseCurrency, conversionRate);

    // Simple cap check (demo: 100)
    const CAP = 100;
    const totalAmount = getRecords().reduce(function(sum, r) { return sum + r.amount; }, 0);

    if (totalAmount > CAP) {
      showMessage("settings-msg", "Alert: Cap exceeded! Current total is " + totalAmount);
    }
  });
});