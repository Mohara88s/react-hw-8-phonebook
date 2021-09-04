const getIsLoggedIn = state => state.auth.isLoggedIn;

const getAuthError = state => state.auth.authError;

const getRegError = state => state.auth.regError;

const getUserMail = state => state.auth.user.email;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getAuthError,
  getRegError,
  getUserMail,
  getIsFetchingCurrent,
};
export default authSelectors;
