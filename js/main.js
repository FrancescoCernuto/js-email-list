console.log('js')

const list_container = document.getElementById('list_container')
const reload_btn = document.getElementById('reload_btn')

function getEmail() {
   fetch ('https://flynn.boolean.careers/exercises/api/random/mail')