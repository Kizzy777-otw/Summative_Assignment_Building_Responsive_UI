// seed.js
async function loadSeedData() {
  try {
    const response = await fetch('seed.json');
    if (!response.ok) throw new Error(`Failed to load seed.json`);

    const data = await response.json();
    const records = data.records || data;

    // Add IDs so delete/edit works
    const enriched = records.map(r => ({
      id: "rec_" + Date.now() + Math.random().toString(16).slice(2),
      ...r,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    // Save under the same key storage.js expects
    localStorage.setItem("finance:data", JSON.stringify(enriched));

    console.log("Seed data loaded into localStorage");
  } catch (err) {
    console.error("Error loading seed.json:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadSeedData);