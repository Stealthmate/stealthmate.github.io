var app = new Vue({
  el: '#app',
  computed: {
    lang() {
      if(LANGS.includes(POST_LANG)) return POST_LANG
      return "en"
    },
    written_on() {
      return DATA.templates.written_on[this.lang].replace("%DATA", POST_DATE)
    },
    delay() {
      return Math.pow(10, this.speed)
    },
    strings() {
      return DATA.localized[this.locale]
    }
  }
})
