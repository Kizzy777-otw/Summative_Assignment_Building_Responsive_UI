// Description: no leading/trailing spaces
export function validateDescription(text) {
  return /^\S(?:.*\S)?$/.test(text);
}

// Amount: numeric with up to 2 decimals
export function validateAmount(num) {
  return /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(num);
}

// Category: letters, spaces, hyphens
export function validateCategory(cat) {
  return /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(cat);
}

// Date: YYYY-MM-DD
export function validateDate(date) {
  return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date);
}
