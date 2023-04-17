<template>
  <div class="auth">
    <form class="auth__form" v-if="isLogin" @submit.prevent="handleLogin">
      <h2 class="auth__title">Авторизация</h2>
      <div class="auth__field">
        <label for="login" class="auth__label">Логин</label>
        <input type="text" id="login" v-model="phone" class="auth__input" required>
      </div>
      <div class="auth__field">
        <label for="password" class="auth__label">Пароль</label>
        <input type="password" id="password" v-model="password" class="auth__input" required>
      </div>
      <button type="submit" class="auth__button">Войти</button>
      <span class="auth__link" @click="toggleAuth">Регистрация</span>
    </form>
    <form class="auth__form" v-else @submit.prevent="handleRegister">
      <h2 class="auth__title">Регистрация</h2>
      <div class="auth__field">
        <label for="name" class="auth__label">Введите номер телефона</label>
        <input type="number" class="auth__input"  min="0" step="1" id="phone" v-model="phone" required>
      </div>      
      <button type="submit" class="auth__button">Зарегистрироваться</button>
      <span class="auth__link" @click="toggleAuth">Авторизация</span>
    </form>
    <ModalView :isOpen="showMessage" :message=message @close="showMessage = false"/>    
  </div>
</template>

<script>
import router from "@/router";
import ModalView from "../components/ModalView.vue" 
import {mapActions, mapGetters} from 'vuex'
import store from "@/store";
export default {
  data() {
    return {
      isLogin: true,
      phone: '',
      password: '',
      showMessage: false,
    }
  },
  computed: {
    ...mapGetters({
      message: 'auth/message',
      isAuth: 'auth/isAuth'
    })
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      register: 'auth/register'
  }),
    toggleAuth() {
      this.isLogin = !this.isLogin;
    },
    async handleLogin() {
      await this.login({phone: this.phone, password: this.password})
      this.showMessage = true;
    },
    async handleRegister() {
      await this.register({phone: this.phone})  
      this.showMessage = true;  
    }
  },
  components: {
    ModalView
  },
  mounted() {
    if (store.state.auth.isAuth) {
      router.push('/settings')
    }    
  }
}
</script>


<style>
.auth {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}

.auth__form {
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
background-color: #fff;
}

.auth__title {
font-size: 24px;
margin-bottom: 20px;
}

.auth__field {
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 15px;
}

.auth__label {
font-size: 16px;
margin-bottom: 5px;
}

.auth__input {
width: 100%;
height: 40px;
padding: 5px 10px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 16px;
box-sizing: border-box;
}

.auth__button {
width: 100%;
height: 40px;
margin-top: 20px;
border: none;
border-radius: 5px;
background-color: #007aff;
color: #fff;
font-size: 16px;
cursor: pointer;
}

.auth__link {
font-size: 14px;
text-align: center;
cursor: pointer;
}

.auth__message {
width: 100%;
margin-top: 20px;
padding: 10px;
border-radius: 5px;
background-color: #fff;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
text-align: center;
}
</style>