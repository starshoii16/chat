function clock(){
    var date = new Date(),
           hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
           minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
           seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes;
  }
  setInterval(clock, 1000);
  clock();

let chatContainer = document.querySelector('.chat')
let template = document.querySelector('#massege-tamplate').content
let templateMy = template.querySelector('.chat-message__my')
let textTemplateMy = template.querySelector('.message-text__my')
let input = document.querySelector('.input')
let button = document.querySelector('.button')

button.addEventListener('click', function () { 
  textTemplateMy.textContent = input.value
  let sample = template.cloneNode(true)
  let inVal = input.value
  if (inVal.length > 0){
   chatContainer.appendChild(sample)
   input.value = ''
  }
  let mess = chatContainer.querySelectorAll('.chat-message__my')
  for(let i = 0; i < mess.length; i++) {
    let button = document.querySelector('.chat').querySelectorAll('button')
    button[i].addEventListener('click', function (){
    mess[i].remove()
    })
  }
})

      
    





