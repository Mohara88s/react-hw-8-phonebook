const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserMail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUserMail,
};
export default authSelectors;
