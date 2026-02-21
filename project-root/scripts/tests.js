// Checking regex validation
validateBtn.onclick = () => {
   let word = descTest.value, cash = amountTest.value;
  validationResult.textContent =
    (/^[A-Za-z\s]+$/.test(word) ? "✓ Desc " : "✗ Desc ") +
     (/^\d+(\.\d{1,2})?$/.test(cash) ? "✓ Amt" : "✗ Amt");
};

// showing the records
 exportBtn.onclick = () =>
  exportOutput.textContent = localStorage.getItem("finance:data") || "Nada";

// Clearing records
clearBtn.onclick = () => {
  localStorage.removeItem("finance:data");
   exportOutput.textContent = "Poof!";
};

// ARIA test
ariaBtn.onclick = () => ariaTest.textContent = "Hey, I’m talking!";