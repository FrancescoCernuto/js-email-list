console.log('js')

const list_container = document.getElementById('list_container')
const reload_btn = document.getElementById('reload_btn')

function getEmail() {
   fetch ('https://flynn.boolean.careers/exercises/api/random/mail')

   function createPromises() {
    const promises = []
    for (let i = 0; i < 10; i++) {
        promises.push(getEmail())
    }
    return promises

    function getEmails() {
        const docFragment = document.createDocumentFragment()
        const promises = createPromises()
        Promise.allSettled(promises).then((value) => {
            value.forEach((el) => {
                let newElement
    
                if (el.status === 'fulfilled') {
                    const currentEmail = el.value.data.response
                    newElement = createElement('li', currentEmail)
                } else {
                    newElement = createElement('li', 'Failed to load Email')
                }
    
                docFragment.appendChild(newElement)
            })
            list_container.append(docFragment)
        })