export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!$#%*?&])[A-Za-z\d@$!%#*?&]{6,}$/.test(
    password
  );
};