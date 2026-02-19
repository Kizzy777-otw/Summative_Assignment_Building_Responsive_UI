// Key name for localStorage
const KEY = "finance:data";

/**
 * Load records from localStorage
 * @returns {Array} records array
 */
export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error loading data:", err);
    return [];
  }
}

/**
 * Save records to localStorage
 * @param {Array} data - records array
 */
export function save(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (err) {
    console.error("We had an error saving your data:", err);
  }
}

/**
 * Clear all records (optional helper)
 */
export function clear() {
  localStorage.removeItem(KEY);
}