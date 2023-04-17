<template>
  <section class="settings">
    <div class="settings__header">
      <h1 class="settings__title">Настройки</h1>
      <div class="settings__profile">
        <div class="settings__name">{{ fName }}</div>
        <button @click="logout" class="settings__exit">Выход</button>
      </div>      
    </div>    
    <div class="settings__container">
      <div class="settings__group">
        <div class="settings__column-left">          
        </div>
        <div class="settings__column-right">
          <div class="settings__bottom">
            <button @click="saveData" class="settings__btn">Сохранить</button>
          </div>          
        </div>
      </div>
      <div class="settings__group">
        <div class="settings__column-left">
          <h2 class="settings__chapter-title">Прочие настройки</h2>
        </div>
        <div class="settings__column-right">
          <div class="settings__wrapper">
            <div class="settings__hours">
            <label class="settings__hours-title" for="hours">Часовой пояс</label>
            <select class="settings__hours-options" name="hours" id="">
              <option value="moscow">Москва</option>
              <option value="samara">Самара</option>
              <option value="kaliningrad">Калининград</option>
              <option value="ekaterinburg">Екатеринбург</option>
            </select>
          </div>
          <div class="settings__notifications-group settings__other">
            <input
              type="checkbox"
              name="newADS"
              id="newADS"
              class="settings__check"
            /><label class="settings__notifications-lable checkbox-label" for="newADS"
              >Автоматически переходить к новым объявлениям</label
            >
            <div class="settings__tooltip-group">
              <i class="settings__tooltip">
              i              
            </i>
            <span class="settings__tooltiptext">
                Лента будет автоматически обновляться 1 раз в 3 секунды
              </span>
            </div>            
          </div>
          <div class="settings__notifications-group settings__other">
            <input
              type="checkbox"
              name="color"
              id="color"
              class="settings__check"
            /><label class="settings__notifications-lable checkbox-label" for="color"
              >Включить цвета в ленте</label
            >
            <div class="settings__tooltip-group">
              <i class="settings__tooltip">
              i              
            </i>
            <span class="settings__tooltiptext">
                Включение зеленого/желтого цвета
              </span>
            </div> 
          </div>
          </div>                   
        </div>
      </div>
      <div class="settings__group">
        <div class="settings__column-left">
          <h2 class="settings__chapter-title">Переход в карточку</h2>
        </div>
        <div class="settings__column-right">
          <p class="settings__chapter-description">
            Выберите, каким образом будет открываться детальное представление
            выбранного вами транспорта.
          </p>
          <div class="settings__wrapper">
            <div class="settings__notifications-group">
            <input
              type="radio"
              name="jump"
              checked
              id="curent"
              class="settings__radio"
            /><label class="settings__notifications-lable" for="curent"
              >В карточку в текущем окне</label
            >
          </div>
          <div class="settings__notifications-group">
            <input
              type="radio"
              name="jump"
              id="separate"
              class="settings__radio"
            /><label class="settings__notifications-lable" for="separate"
              >В карточку в отдельном окне</label
            >
          </div>
          <div class="settings__notifications-group">
            <input
              type="radio"
              name="jump"
              id="source"
              class="settings__radio"
            />
            <div class="settings__column">
              <label class="settings__notifications-lable" for="source"
              >На источник</label
            >
            <div class="settings__tooltip-group">
              <i class="settings__tooltip">
              i              
            </i>
            <span class="settings__tooltiptext">
                Прямой переход в объявление на источнике
              </span>
            </div>
            </div>           
          </div>
          </div>          
        </div>
      </div>
      <div class="settings__group">
        <div class="settings__column-left">
          <h2 class="settings__chapter-title">Оповещения о новых подборках</h2>
        </div>
        <div class="settings__column-right">
          <p class="settings__chapter-description">
            Выберите, куда будут приходить уведомления при появлении
            автомобилей, которые подходят под критерии вашей подборки.
          </p>
          <div class="settings__wrapper">
            <p class="settings__notifications">Уведомления</p>
            <div class="settings__notifications-group">
            <input
              type="radio"              
              name="notifications"
              :checked="(this.notifyOff)"
              id="off"
              class="settings__radio"
            /><label class="settings__notifications-lable" for="off"
              >Выкл</label
            >
          </div>
          <div class="settings__notifications-group">
            <input
              type="radio"
              disabled="disabled"
              name="notifications"
              id="Push"
              class="settings__radio"
            />
            <div class="settings__column">
              <label class="settings__notifications-lable" for="Push"
              >Push</label
            >
            <div class="settings__tooltip-group">
              <i class="settings__tooltip">
              i              
            </i>
            <span class="settings__tooltiptext">
              Можно установить только в приложении
              </span>
            </div>
            </div>
          </div>
          <div class="settings__notifications-group">
            <input
              type="radio"
              name="notifications"
              id="Email"
              :checked="(!this.notifyOff)"
              class="settings__radio"
            />
            <div class="settings__column">
              <label class="settings__notifications-lable" for="Email"
              >Email</label
            >
            <div class="settings__email-block" v-if="!email">{{emailString}}</div>
            <input v-if="email" class="settings__input" type="text" :value="emailString" @input="event => emailString = event.target.value">
              <span class="settings__icon-edit" v-if="!email" @click="email = !email"></span>
            </div>           
          </div>
          <div class="settings__notifications-group">
            <input
              type="radio"
              name="notifications"
              id="TelegramID"
              class="settings__radio"
            />
            <div class="settings__column">
              <label class="settings__notifications-lable" for="TelegramID"
              ><a href="https://avclick.me/v/AVinfoBot" class="settings__notifications-link">Telegram ID</a></label
            >
            <input v-if="telegram" type="text">
              <span class="settings__icon-edit" v-if="!telegram" @click="telegram = !telegram"></span> 
            </div>                        
          </div>
          </div> 
        </div>
      </div>
      <div class="settings__group">
        <div class="settings__column-left">
          <h2 class="settings__chapter-title">Учетная запись</h2>
        </div>
        <div class="settings__column-right">
          <div class="settings__wrapper">
            <div class="settings__information">
            <div class="settings__information-row">
              <label class="settings__lable" for="company">Компания</label>
              <input :value="companyName" class="settings__input" type="text" id="company" />
            </div>
            <div class="settings__information-row">
              <label class="settings__lable" for="login">Логин</label>
              <input :value="login" class="settings__input" type="text" id="login" />
            </div>
            <div class="settings__information-row">
              <label class="settings__lable" for="number">Номер телефона</label>
              <input :value="phone" class="settings__input" type="text" id="number" />
            </div>
            <div class="settings__information-row">
              <label class="settings__lable" for="name">Имя</label>
              <input :value="fName" class="settings__input" type="text" id="name" />
            </div>
            <div class="settings__information-row">
              <label class="settings__lable" for="surname">Фамилия</label>
              <div class="settings__block">
                <input :value="lName" class="settings__input" type="text" id="surname" />
                <span class="settings__span">* Не обязательно</span>
              </div>
            </div>
          </div>
          </div>          
        </div>
      </div>
      <div class="settings__group">
        <div class="settings__column-left">
          <h2 class="settings__chapter-title">Звонок через SIP</h2>
          <input id="sip" type="checkbox" class="settings__sip-input">
          <label ref="sipLabel" for="sip" class="settings__sip-label"></label>
        </div>
        <div class="settings__column-right">
          <div class="settings__move-chapter">
            <h2 class="settings__chapter-title">Звонок через SIP</h2>
            <input id="sip1" type="checkbox" class="settings__sip-input">
            <label for="sip1" class="settings__sip-label"></label>        
          </div>
          <p class="settings__chapter-description">
            Включите эту функцию чтобы Авито и другие площадки не блокировали
            ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных
            номеров.
          </p>
        </div>
      </div> 
    </div>
    <ModalView :isOpen="showMessage" :message=message @close="showMessage = false"/>
  </section>
</template>

<style>

.settings__header {
  display: flex;
  justify-content: space-between;
  background-color: #f9f9fc;
  padding: 13px;
}
.settings__title {
  font-size: 3rem;
  margin: 0;  
  text-align: left;
}

.settings__profile {
  display: flex;
  align-items: center;
}

.settings__name {
  margin-right: 15px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

.settings__exit {
  background: #2dc574;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  outline: none;
  padding: 1.3rem 2rem;
  text-align: center;
}

.settings__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13px;
}

.settings__group {
  display: flex;
  max-width: 740px;
  justify-content: flex-start;
  margin-bottom: 4rem;
}

.settings__column-left {
  display: flex;
  width: 250px;
}

.settings__column-right {
  max-width: 490px;
}

.settings__chapter-title {
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
  margin-right: 10px;
}

.settings__chapter-description {
  color: #686869;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: left;
}

.settings__lable {
  font-weight: 500;
  margin-bottom: 0;
  margin-right: 1rem;
  margin-top: 0.6rem;
  max-width: 12rem;
  font-size: 1.4rem;
  flex: 0 0 12rem;
  text-align: left;
}

.settings__input {
  width: 100%;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
}

.settings__input:focus {
  outline: 1px solid #2dc574;
}

.settings__information-row {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.settings__block {
  position: relative;
  display: flex;
}

.settings__span {
  position: absolute;
  color: #a3a3a3;
  display: block;
  font-size: 1.2rem;
  top: 35px
}

.settings__notifications {
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
}

.settings__notifications-group {
  display: flex;
  border-bottom: 0.1rem solid #e1e1e3;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.settings__notifications-group:last-child {
  margin-bottom: 0;
  border: none;
}

.settings__other {
  justify-content: space-between;
  border: none;
  position: relative;
}

.settings__radio {
  margin-right: 5px;
}

.settings__notifications-lable {
  font-size: 1.4rem;
  cursor: pointer;
}

.settings__wrapper {
  max-width: 370px;
}

.settings__hours {
  display: flex;
  align-items: center;

}
.settings__hours-title {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 0;
  margin-right: 2.5rem;
  margin-top: 0.4rem;
  text-align: left;
  width: 18rem;
}
.settings__hours-options {
  height: 28px;
  background: #fff;
  border: 1px solid #e1e1e3;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-family: inherit;
  font-weight: 500;
  width: 100%;
  padding: 0 40px 0 10px;
  margin-right: 4rem;
}

.settings__btn {
  background: #2dc574;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  outline: none;
  padding: 1.3rem 2rem;
  text-align: center;
  transition: all 0.3s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 490px;
}

.settings__bottom {
  border-bottom: 0.1rem solid #e1e1e3;
  padding-bottom: 1.5rem;
}

.settings__check {
  height: 1px;
  left: -9999px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: -9999px;
  visibility: hidden;
  width: 1px;
}

.checkbox-label {
  padding: 0 0 0 2.5rem;
  text-align: left;
  line-height: 1.2;
  cursor: pointer;
}

.settings__check:checked+.checkbox-label::before {
  background-color: #2dc574;
  border-color: #2dc574;
  content: "";
  position: absolute;
}

.checkbox-label::before {
  border: 1px solid #2dc574;
  -webkit-border-radius: 0.2rem;
  -moz-border-radius: .2rem;
  border-radius: 0.2rem;
  content: "";
  height: 1.8rem;
  left: 0;
  position: absolute;
  top: 0.1rem;
  width: 1.8rem;
}

.settings__sip-input {
  height: 1px;
  left: -9999px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: -9999px;
  visibility: hidden;
  width: 1px;
}

.settings__sip-label {
  min-width: 3.5rem;
  background: #fff;
  border-radius: 16px;
  border: 2px solid #bababa;
  display: inline-block;
  height: 20px;
  position: relative;
  width: 36px;
  cursor: pointer;
}

.settings__sip-input:checked+.settings__sip-label {
  border: 2px solid #2dc574;
}

.settings__sip-input:checked+.settings__sip-label::before {
  background: #2dc574;
  -webkit-transform: translateX(16px);
  transform: translateX(20px);
}

.settings__sip-label::before {
  background: #bababa;
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 20px;
  left: 0px;
  position: absolute;
  transition: .15s;
  width: 16px;
}

.settings__check:checked+.checkbox-label::after {
  background-image: url('../assets/icon-check.svg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    color: #fff;
    content: "";
    height: 1.3rem;
    left: 0.2rem;
    position: absolute;
    top: 0.3rem;
    width: 1.3rem;
}

.settings__icon-edit {
  width: 22px;
  height: 22px;
  background-image: url('../assets/icon-edit.svg');
  background-size: 100%;
  cursor: pointer;
}

.settings__email-block {
  font-size: 1.4rem;
  font-weight: 400;
  position: absolute;
  right: 30px;
}

.settings__tooltip {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgray;
  font-style: normal;
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  border: 1px solid lightgray;
  border-radius: 100%;
  cursor: help;
}

.settings__tooltiptext {
  
  background-color: #2dc574;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 4px;
  position: absolute;
  z-index: 1;
  right: 0;
  left: 25%;
  font-size: 14px !important;
  visibility: hidden;
  
  transition: 0.3s;
  font-weight: 400;
}

.settings__tooltip:hover+.settings__tooltiptext {
  visibility: visible;
}

.settings__column {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.settings__notifications-link {
  color: #2dc574;
  text-decoration: underline;
}

.settings__move-chapter {
  display: none;
}

@media (max-width:768px) {
  .settings__column-left {
    display: none;
  }
  .settings__btn {
    width: 294px;
  }
  .settings__move-chapter {
  display: flex;
}
}

</style>

<script>
import {mapActions, mapGetters} from 'vuex'
import ModalView from "../components/ModalView.vue" 

export default {
  name: 'settingsPage',
  data() {
    return {
      telegram: false,
      email: false,
      emailString: '',
      notifyOff: true,
      companyName: '',
      fName: '',
      lName: '',
      login: '',
      phone: '',
      showMessage: false
    }
  },
  components: {
    ModalView
  },
  computed: {
    ...mapGetters({
      allData: 'user/allData',
      message: 'user/message',
      isAuth: 'auth/isAuth'
    }),
  },
  methods: {
    ...mapActions({
      fetchUserData: 'user/fetchUserData',
      updateUserData: 'user/updateUserData'
  }),
    async fetchData() {
      await this.fetchUserData()
      this.fName = this.allData.fname
      this.lName = this.allData.lname
      this.login = this.allData.login
      this.phone = this.allData.phone
      this.companyName = this.allData.companyname
      this.emailString = this.allData.email      
      this.notifyOff = (this.allData.notifytypestring === '')
      this.email = (this.allData.notifytypestring === 'Email')

  },
    async saveData() {
      await this.updateUserData(this.emailString)
      this.showMessage = true;
    },
    logout() {
      localStorage.clear();      
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>