import { load, save } from "./storage.js";

// In-memory stash of records
let stash = load();

// Making the ID
 const makeId = () => "rec_" + Date.now();

// Getting all records
export const getRecords = () => stash;

// Adding the new record
export const addRecord = data => {
   const now = new Date().toISOString();
  const newbie = {
    id: makeId(),
    description: data.description,
     amount: parseFloat(data.amount),
    category: data.category,
     date: data.date,
     createdAt: now,
    updatedAt: now,
  };
  stash.push(newbie);
   save(stash);
  return newbie;
};

// Editing the record
export const editRecord = (id, tweaks) => {
   const found = stash.find(x => x.id === id);
   if (!found) return null;
  Object.assign(found, tweaks);
   found.updatedAt = new Date().toISOString();
   save(stash);
  return found;
};

// Deleting the record
export const deleteRecord = id => {
  stash = stash.filter(x => x.id !== id);
   save(stash);
};