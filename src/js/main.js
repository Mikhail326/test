const form = document.querySelector('.form')
const input = document.querySelector('.form_number')
const error = document.querySelector('.form_error')


const sendForm = (e) => {
    e.preventDefault()

    if (input.value.length === 0) {
        error.style.opacity = '1'
    } else {
        input.value = ''
        error.style.opacity = '0'
    }
}

form.addEventListener('submit', sendForm)