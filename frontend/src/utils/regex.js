export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Atleast characters, one uppercase letter, one number, and one special character:
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
