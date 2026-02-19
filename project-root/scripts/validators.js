// No leading/trailing spaces
export const validateDescription = txt => /^\S.*\S?$/.test(txt);

// Numbers with up to 2 decimals
export const validateAmount = cash => /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(cash);

// Letters, spaces, hyphens
export const validateCategory = tag => /^[A-Za-z]+([ -][A-Za-z]+)*$/.test(tag);

// YYYY-MM-DD
export const validateDate = day => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(day);