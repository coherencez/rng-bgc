'use strict'
const body = document.body

// string interpolation/templating to incorporate the '#' symbol
// returns a random float between 0 and 1
// toString(16) converts that return to base16 aka HEX
// slice(2,8) removes the 0. at the start, and returns the next 6 chars
const getColor = () => `#${Math.random().toString(16).slice(2,8)}`

// set background of body element to the color passed to function
const setBackground = (color) => {
  body.style.background = color
}

// body.addEventListener('keypress', (e) => {
//   if(e.keyCode === 32) {
//     setBackground(getColor())
//   }
//   return null
// })

const timeout = setInterval(() => setBackground(getColor()), 250)
const clearThings = () => clearInterval(timeout)
