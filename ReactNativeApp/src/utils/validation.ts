export const Validation = {
  // Email validation
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Password validation (minimum 8 characters, at least one letter and one number)
  isValidPassword: (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  },

  // Phone number validation (basic)
  isValidPhone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  },

  // Required field validation
  isRequired: (value: string): boolean => {
    return value.trim().length > 0;
  },

  // Minimum length validation
  hasMinLength: (value: string, minLength: number): boolean => {
    return value.length >= minLength;
  },

  // Maximum length validation
  hasMaxLength: (value: string, maxLength: number): boolean => {
    return value.length <= maxLength;
  },

  // URL validation
  isValidUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Number validation
  isNumber: (value: string): boolean => {
    return !isNaN(Number(value)) && value.trim() !== '';
  },

  // Positive number validation
  isPositiveNumber: (value: string): boolean => {
    const num = Number(value);
    return !isNaN(num) && num > 0;
  },
};

export const ValidationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  password: 'Password must be at least 8 characters with letters and numbers',
  phone: 'Please enter a valid phone number',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be no more than ${max} characters`,
  url: 'Please enter a valid URL',
  number: 'Please enter a valid number',
  positiveNumber: 'Please enter a positive number',
}; 