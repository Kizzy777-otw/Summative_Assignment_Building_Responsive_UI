import { load, save } from "./storage.js";

// Keep records in memory
let records = load();

/**
 * Generate a unique ID for each record
 */
function generateId() {
  return "rec_" + Date.now();
}

/**
 * Get all records
 */
export function getRecords() {
  return records;
}

/**
 * Add a new record
 * @param {Object} data - { description, amount, category, date }
 */
export function addRecord(data) {
  const now = new Date().toISOString();
  const record = {
    id: generateId(),
    description: data.description,
    amount: parseFloat(data.amount),
    category: data.category,
    date: data.date,
    createdAt: now,
    updatedAt: now,
  };
  records.push(record);
  save(records);
  return record;
}

/**
 * Edit an existing record
 * @param {string} id - record id
 * @param {Object} updates - fields to update
 */
export function editRecord(id, updates) {
  const record = records.find(r => r.id === id);
  if (!record) return null;

  Object.assign(record, updates);
  record.updatedAt = new Date().toISOString();
  save(records);
  return record;
}

/**
 * Delete a record
 * @param {string} id - record id
 */
export function deleteRecord(id) {
  records = records.filter(r => r.id !== id);
  save(records);
}
