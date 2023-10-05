export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Atleast characters, one uppercase letter, one number, and one special character:
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

// When adding an entry to the database which is meant to be unique, the backend will not add the entry, and return
// an error message. This is used to extract the field causing the error.
export const EXTRACT_DUPLICATE_FIELD_FROM_ERROR_REGEX = /key: \{\s*(\w+)\s*:/;