<template>
  <transition name="modal">
    <div class="modal-mask" v-if="isOpen">      
      <div class="modal-container">
        <div class="modal__content">                     
            <button class="modal-close-button" @click="closeModal">X</button>          
          <div class="modal-body">
            <p>{{ message }}</p>
          </div>
        </div>        
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: "Вы успешно зарегистрировались"
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-container {
  display: table-cell;
  vertical-align: middle;  
}

.modal__content {
  margin: 0 auto;
  width: 300px;
  position: relative;
}

.modal-close-button {
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  right: 10px;
  top: 10px;  
}

.modal-body {
  background-color: #fff;
  padding: 20px;
}
</style>
