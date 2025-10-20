// Validation Rules
const validationRules = {
  employeeId: {
    pattern: /^[A-Za-z0-9]{4,10}$/,
    message: 'Employee ID must be 4-10 alphanumeric characters',
  },
  name: {
    pattern: /^[A-Za-z\s]{2,50}$/,
    message: 'Name must contain only letters and spaces (2-50 characters)',
  },
  phone: {
    pattern: /^\D*(\d\D*){10}$/,
    message: 'Please enter a valid phone number (10 digits)',
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  username: {
    pattern: /^[A-Za-z0-9_]{4,20}$/,
    message: 'Username must be 4-20 characters (letters, numbers, underscore only)',
  },
  password: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    message:
      'Password must be 8+ characters with uppercase, lowercase, number, and special character',
  },
  address: {
    pattern: /^.{10,}$/,
    message: 'Address must be at least 10 characters',
  },
  manager: {
    pattern: /^[A-Za-z\s]{2,50}$/,
    message: 'Manager name must contain only letters and spaces',
  },
};

export default validationRules;
