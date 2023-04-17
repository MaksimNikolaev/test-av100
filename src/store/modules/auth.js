import router from "@/router";
import { API_KEY, API_URL } from "@/utils/api";
import axios from "axios";

const state = {
  isAuth: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt") || "",
  message: "",
};

const mutations = {
  setAuth(state, value) {
    state.isAuth = value;
  },
  setToken(state, value) {
    state.token = value;
  },
  setMessage(state, value) {
    state.message = value;
  },
};

const actions = {
  async login({ commit }, { phone, password }) {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { login: phone, password: password, fromuser: 0 },
        {
          headers: {
            "X-Api-Key": API_KEY,
            "Access-Control-Allow-Origin": "",
          },
        }
      );
      commit("setAuth", true);
      commit("setToken", response.data.token);
      commit("setMessage", "Вы успешно прошли авторизацию!");
      localStorage.setItem("jwt", response.data.token);
      router.push("/settings");
    } catch (error) {
      commit("setMessage", error.response.data.errors[0].title);
    }
  },
  async register({ commit }, { phone }) {
    try {
      await axios.post(
        `${API_URL}/register`,
        { login: phone },
        {
          headers: {
            "X-Api-Key": API_KEY,
            "Access-Control-Allow-Origin": "",
          },
        }
      );
      commit("setMessage", "Вы успешно прошли регистрацию!");
    } catch (error) {
      commit("setMessage", error.response.data.errors[0].title);
    }
  },
  logout({ commit }) {
    commit("setAuth", false);
  },
};

const getters = {
  isAuth(state) {
    return state.isAuth;
  },
  message(state) {
    return state.message;
  },
  token(state) {
    return state.token;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
