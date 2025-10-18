const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPolicyRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

export const validateRequired = (value) => value.trim().length > 0;

export const validateEmail = (email) => emailRegex.test(email);

export const validatePassword = (password) => passwordPolicyRegex.test(password);

export const validateConfirmPassword = (password, confirmPassword) =>
  password === confirmPassword && confirmPassword.length > 0;
