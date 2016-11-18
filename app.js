'use strict'
const      body = document.body
const container = document.querySelector('.container')
const     boxes = document.getElementsByClassName('box')

// string interpolation/templating to incorporate the '#' symbol
// returns a random float between 0 and 1
// toString(16) converts that return to base16 aka HEX
// slice(2,8) removes the 0. at the start, and returns the next 6 chars
// const generateRandomColor = () => `#${Math.random().toString(16).slice(2,8)}`
const generateRandomColor = () => {
  const oneOrZero = Math.round(Math.random())
  let color = null
  ;(oneOrZero === 1)
    ? color = '#000'
    : color = '#fff'
  return color
}

// set background of element to the color passed to function
const setBackground = (element, color) => {
  element.style.background = color
}

const setRandomPosition = (element) => {
  const positions = ['top', 'right', 'bottom', 'left']
    ,      rndNum = (max = 10, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min
    ,      rndPos = positions[rndNum(positions.length - 1, 0)]
  element.style.top = rndNum()
  element.style.right = rndNum()
  element.style.left = rndNum()
  element.style.bottom = rndNum()
}

// create boxes in the DOM
for (let i = 0; i < 10000; i++) {
  const box = document.createElement('div')
        box.classList.add('box')
        container.appendChild(box)
}

const startThings = () => {
  const interval = 250

  let timer1 //= setInterval(() => setBackground(body, generateRandomColor()), interval)

  const timer2 = setInterval(() => {
    for (let i = 0; i < boxes.length; i++) {
      setBackground(boxes[i], generateRandomColor())
      setRandomPosition(boxes[i])
    }
  }, interval)


  return { timer1, timer2 }
}

const clearThings = (...ids) => {
  ids.forEach(id => clearInterval(id))
}

let startStopBool = true
let timers = null
body.addEventListener('keypress', (e) => {
  if(e.keyCode === 13) {
    switch(startStopBool) {
      case true:
        timers = startThings()
        break
      case false:
        clearThings(timers.timer1, timers.timer2)
        break
    }
    startStopBool = !startStopBool
  }
  return null
})
