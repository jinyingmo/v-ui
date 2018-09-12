import Vue from 'vue'
import button from './components/button'
import radio from './components/radio'

var app = new Vue({
  el: '#app',
  data: {
    
  },
  components: {
    'jym-button': button,
    'jym-radio': radio
  }
})