'use strict'
const      body = document.body
const container = document.querySelector('.container')
const     boxes = document.getElementsByClassName('box')

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

// create boxes in the DOM
for (let i = 0; i < 100; i++) {
  const box = document.createElement('div')
        box.classList.add('box')
        container.appendChild(box)
}

const startThings = () => {
  const interval = 250

  const colorChangeInterval2 = setInterval(() => {
    for (let i = 0; i < boxes.length; i++) {
      setBackground(boxes[i], getColor())
    }
  }, interval)

  const colorChangeInterval = setInterval(() => setBackground(body, getColor()), interval)
  return { colorChangeInterval, colorChangeInterval2 }
}

const clearThings = (...ids) => {
  ids.forEach(id => clearInterval(id))
}
