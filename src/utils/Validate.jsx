const checkValidate = (name, email, password, isSignIn) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isValidUsername = /^[0-9A-Za-z]{6,16}$/.test(name);
  const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

  if (!isValidEmail && !isValidPassword) return "Email and password are not valid";
  if (!isValidEmail) return "Enter valid email";
  if (!isValidPassword) return "Enter valid password";

  if (!isSignIn && !isValidUsername) return "Enter valid name (6-16 alphanumeric characters)";

  return "";
};
export default checkValidate;