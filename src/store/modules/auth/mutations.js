export default {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state) {
    state.user = null;
    state.token = "";
  },
  setToken(state, token) {
    state.token = token;
  },
};
