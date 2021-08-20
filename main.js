const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const pmEl = document.querySelector('.pm')
const percentEl = document.querySelector('.percent')
const equalsButton = document.querySelector('.equals')
const allClearButton = document.querySelector('.ac')
const currentEl = document.querySelector('.current')
const previousEl = document.querySelector('.previous')
let operator = ''


const appendNumber = numStr => {
  //can't append more than one decimal point
  if( numStr === "." && currentEl.textContent.includes('.')){
    return
  }
  if(currentEl.textContent === '0'){
    currentEl.textContent = numStr
  } else {
    currentEl.textContent += numStr  
  }
}

const compute = () => {
  let computation
  const prev = parseFloat(previousEl.textContent)
  const current = parseFloat(currentEl.textContent)
  if (isNaN(prev) && isNaN(current)){ 
    return
  }
  switch (operator) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '/':
      computation = prev / current
      break
    default:
      return
  }
  return (Math.round(computation * 100)/100).toString()
}


const allClear = () => {
  currentEl.textContent = '0'
  previousEl.textContent = ''
  operator = ''
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.textContent)
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
  if(!previousEl.textContent){
    operator = button.textContent
    previousEl.textContent = currentEl.textContent
    currentEl.textContent = '0'
    return
  }
  previousEl.textContent = compute()
  operator = button.textContent
  currentEl.textContent = '0'
  })
})


equalsButton.addEventListener('click', () => {
  if(previousEl.textContent){
  currentEl.textContent = compute()
  previousEl.textContent = ''
  operator = ''
}})

allClearButton.addEventListener('click', () => {
  allClear()
})

pmEl.addEventListener('click', ()=>{
  if(isNaN(currentEl.textContent)){
    return
  }else {
    currentEl.textContent *= -1
  }
})


percentEl.addEventListener('click', ()=>{
  if(isNaN(currentEl.textContent)){
    return
  }else {
    currentEl.textContent = (Math.round(+displayEl.textContent)/100).toString()
  }
})