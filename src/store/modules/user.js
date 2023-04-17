import axios from "axios";
import { API_KEY, API_URL } from "@/utils/api";

const state = {
  allData: {},
  message: "",
};

const mutations = {
  setAllData(state, data) {
    state.allData = data;
  },
  setMessage(state, value) {
    state.message = value;
  },
};

const actions = {
  async fetchUserData({ commit }) {
    try {
      const response = await axios.get(`${API_URL}/user`, {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": API_KEY,
          "X-User-Token": localStorage.getItem("jwt"),
        },
      });
      commit("setAllData", response.data);
    } catch (error) {
      console.warn(error);
      alert(error);
    }
  },
  async updateUserData({ commit, state },  emailString) {
    try {
      await axios.put(
        `${API_URL}/user/${state.allData.id}`,
        {
          ...state.allData,
          email: emailString,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": API_KEY,
            "X-User-Token": localStorage.getItem("jwt"),
          },
        }
      );
      commit("setMessage", "Сохранено!");
    } catch (error) {
      console.warn(error);
      commit("setMessage", "Произошла ошибка!");
    }
  },
};

const getters = {
  allData(state) {
    return state.allData;
  },
  message(state) {
    return state.message;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
