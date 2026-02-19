import { getRecords } from "./state.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("settings-form");
  const baseCurrencySelect = document.getElementById("base-currency");
  const conversionRateInput = document.getElementById("conversion-rate");

  // Live region for cap/target messages
  const liveMessage = document.createElement("div");
  liveMessage.setAttribute("role", "status");
  liveMessage.setAttribute("aria-live", "polite");
  document.body.appendChild(liveMessage);

  // Load saved settings
  const savedSettings = JSON.parse(localStorage.getItem("finance:settings") || "{}");
  if (savedSettings.baseCurrency) baseCurrencySelect.value = savedSettings.baseCurrency;
  if (savedSettings.conversionRate) conversionRateInput.value = savedSettings.conversionRate;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const settings = {
      baseCurrency: baseCurrencySelect.value,
      conversionRate: parseFloat(conversionRateInput.value) || 1,
    };

    localStorage.setItem("finance:settings", JSON.stringify(settings));
    liveMessage.textContent = `Settings saved. Base currency: ${settings.baseCurrency}, conversion rate: ${settings.conversionRate}`;
  });

  // Example: Cap logic (set a spending cap of 100 for demo)
  const CAP = 100;
  const totalAmount = getRecords().reduce((sum, r) => sum + r.amount, 0);

  if (totalAmount > CAP) {
    liveMessage.setAttribute("aria-live", "assertive");
    liveMessage.textContent = `Alert: You have exceeded your cap of ${CAP}. Current total is ${totalAmount}.`;
  } else {
    liveMessage.setAttribute("aria-live", "polite");
    liveMessage.textContent = `You are within your cap of ${CAP}. Current total is ${totalAmount}.`;
  }
});