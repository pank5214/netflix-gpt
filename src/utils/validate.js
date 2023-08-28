export const CheckValidData = (email, password) => {
  const isEmailValid = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  return null;
};
