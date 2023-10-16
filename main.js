const mainImg = document.querySelector('#mainImg')
const productInfo = document.querySelector('#productInfo')


mainImg.addEventListener('click',(e)=>{
  e.stopPropagation()
  mainImg.classList.toggle('hide')
  productInfo.classList.remove('hide')
})


const background = document.body
const span = document.querySelector('#bigSpan')
const $b = document.querySelectorAll('b')

const buttons = document.querySelectorAll('#changeProduct button')
buttons[0].addEventListener('click',(e)=>{
  background.style.backgroundColor='white'
  span.style.color='black'
  $b[0].style.backgroundColor='black'
  $b[0].style.color='aliceBlue'
  $b[1].style.backgroundColor='black'
  $b[1].style.color='aliceBlue'
  e.stopPropagation()
})
buttons[1].addEventListener('click',(e)=>{
  background.style.backgroundColor='black'
  span.style.color='aliceBlue'
  $b[0].style.backgroundColor='aliceBlue'
  $b[0].style.color='black'
  $b[0].style.boxShadow='0 0 14px aliceBlue'
  $b[1].style.backgroundColor='aliceBlue'
  $b[1].style.color='black'
  $b[1].style.boxShadow='0 0 14px aliceBlue'
  e.stopPropagation()
})
buttons[2].addEventListener('click',(e)=>{
  background.style.backgroundColor='grey'
  span.style.color='black'
  $b[0].style.backgroundColor='black'
  $b[0].style.color='aliceBlue'
  $b[0].style.boxShadow='0 0 8px black'
  $b[1].style.backgroundColor='black'
  $b[1].style.color='aliceBlue'
  $b[1].style.boxShadow='0 0 8px black'
  e.stopPropagation()
})

console.log(span)
console.log(mainImg)

