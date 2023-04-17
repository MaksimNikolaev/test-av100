<template>
  <router-view></router-view>
</template>

<script>
import router from './router'
import store from './store/modules/auth'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isAuth) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  height: 100%;
}

@media (min-width: 768px) {
  html {
    font-size: 50%;
  }
}

@media (min-width: 992px) {
  html {
    font-size: 62.5%;
  }
}
#app {
  font-family: Montserrat,Helvetica,Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
