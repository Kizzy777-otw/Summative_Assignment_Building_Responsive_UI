// the local storage key for the records
const treasure = "finance:data";

// loading records
export const load = () => {
  try {
    const loot = localStorage.getItem(treasure);
    return loot ? JSON.parse(loot) : [];
  } catch (oops) {
    console.error("Load fail:", oops);
    return [];
  }
};

// Saving records
export const save = stuff => {
  try {
    localStorage.setItem(treasure, JSON.stringify(stuff));
  } catch (oops) {
    console.error("Save fail:", oops);
  }
};

// Clearing records
export const clear = () => localStorage.removeItem(treasure);