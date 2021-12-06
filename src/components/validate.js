// const validator = require("validator");

const validateSignUpForm = (payload) => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (
    !payload ||
    typeof payload.username !== "string" ||
    payload.username.trim().length === 0
  ) {
    isFormValid = false;
    errors.username = "Please provide a user name.";
  }

  if (!payload || typeof payload.email !== "string" || payload.email) {
    isFormValid = false;
    errors.email = "Please provide a correct email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 8 characters.";
  }

  if (!payload || payload.pwconfirm !== payload.password) {
    isFormValid = false;
    errors.pwconfirm = "Password confirmation doesn't match.";
  }

  if (
    !payload ||
    typeof payload.mobileNumner !== Number ||
    payload.mobileNumner.trim().length === 10
  ) {
    isFormValid = false;
    errors.mobileNumner = "MobileNumner must have at 10 characters.";
  }

  if (
    !payload ||
    typeof payload.designation !== "string" ||
    payload.designation.trim().length === 0
  ) {
    isFormValid = false;
    errors.designation = "Please provide a designation.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
};
module.exports = {
  validateSignUpForm: validateSignUpForm,
};
