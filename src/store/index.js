import { createStore } from 'vuex';
import axios from 'axios';
import mutations from './modules/auth/mutations';
import state from './modules/auth/state';

const store = createStore({
  state,
  mutations,
  actions: {
    async login({ commit }, { email, password }) {
      try {
       let response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
       let token = response.data.access_token;
       commit('setToken',{ token })
       commit('setUser', { email });
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    async logout({ commit }) {
      try {
        await axios.post('/api/logout');
        commit('clearUser');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    },
    async fetchUser({ commit }) {
      try {
        const response = await axios.get('/api/user'); 
        commit('setUser', response.data.user);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    getUser(state) {
      return state.user;
    }
  }
});

export default store;
