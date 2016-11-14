'use strict'
const      body = document.body
const container = document.querySelector('.container')

// string interpolation/templating to incorporate the '#' symbol
// returns a random float between 0 and 1
// toString(16) converts that return to base16 aka HEX
// slice(2,8) removes the 0. at the start, and returns the next 6 chars
const getColor = () => `#${Math.random().toString(16).slice(2,8)}`

// set background of body element to the color passed to function
const setBackground = (element, color) => {
  element.style.background = color
}

// body.addEventListener('keypress', (e) => {
//   if(e.keyCode === 32) {
//     setBackground(getColor())
//   }
//   return null
// })

// const timeout = setInterval(() => setBackground(body, getColor()), 250)
const clearThings = () => clearInterval(timeout)

for (let i = 0; i < 1000; i++) {
  const box = document.createElement('div')
        box.classList.add('box')
  container.appendChild(box)
}
