const form = document.querySelector('.form')
const input = document.querySelector('.form_number')
const error = document.querySelector('.form_error')
const errorMessage = document.querySelector('#error_message')

const regExp = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g

const sendForm = async (e) => {
  e.preventDefault()

  if (input.value.length === 0) {
    error.style.opacity = '1'
    errorMessage.innerHTML = '* Поле должно быть заполненно...'
  } else if (!regExp.test(input.value)) {
    error.style.opacity = '1'
    errorMessage.innerHTML = '* Введите номер в правильном формате...'
  } else {
    const response = await fetch('form.php', {
      method: 'POST',
      body: new FormData(form)
    })
    const result = await response.json()

    input.value = ''
    error.style.opacity = '0'

    alert(`Форма отправленна: ${JSON.stringify(result)}`)
  }
}

form.addEventListener('submit', sendForm)