const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserMail = state => state.auth.user.email;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserMail,
  getIsFetchingCurrent,
};
export default authSelectors;
