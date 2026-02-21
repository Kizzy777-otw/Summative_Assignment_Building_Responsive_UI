// No leadingor trailig spaces
 export const validateDescription = txt => /^\S.*\S?$/.test(txt);

// For numbers with up to 2 dec
export const validateAmount = cash => /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(cash);

// This is for letters, spaces, hyphens
 export const validateCategory = tag => /^[A-Za-z]+([ -][A-Za-z]+)*$/.test(tag);

//the format YYYY-MM-DD
export const validateDate = day => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(day);