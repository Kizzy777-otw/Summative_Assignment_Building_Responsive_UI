// Regex check
validateBtn.onclick = () => {
  let d = descTest.value, a = amountTest.value;
  validationResult.textContent =
    (/^[A-Za-z\s]+$/.test(d) ? "✓ Desc " : "✗ Desc ") +
    (/^\d+(\.\d{1,2})?$/.test(a) ? "✓ Amt" : "✗ Amt");
};

// Export records
exportBtn.onclick = () => {
  exportOutput.textContent = localStorage.getItem("finance:data") || "No records";
};

// Clear records
clearBtn.onclick = () => {
  localStorage.removeItem("finance:data");
  exportOutput.textContent = "Cleared";
};

// ARIA demo
ariaBtn.onclick = () => ariaTest.textContent = "ARIA message!";