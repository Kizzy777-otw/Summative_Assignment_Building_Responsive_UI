// LocalStorage key
const treasure = "finance:data";

// Load records
export const load = () => {
  try {
    const loot = localStorage.getItem(treasure);
    return loot ? JSON.parse(loot) : [];
  } catch (oops) {
    console.error("Load fail:", oops);
    return [];
  }
};

// Save records
export const save = stuff => {
  try {
    localStorage.setItem(treasure, JSON.stringify(stuff));
  } catch (oops) {
    console.error("Save fail:", oops);
  }
};

// Clear records
export const clear = () => localStorage.removeItem(treasure);