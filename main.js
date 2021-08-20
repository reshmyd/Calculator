const numberButtons = document.querySelectorAll('.number')
const addButton = document.querySelector('.add')
const subtractButton = document.querySelector('.subtract')
const divideButton = document.querySelector('.divide')
const multiplyButton = document.querySelector('.multiply')
const allClearButton = document.querySelector('.ac')
const pmEl = document.querySelector('.pm')
const percentEl = document.querySelector('.percent')
const equalsButton = document.querySelector('.equals')
const currentEl = document.querySelector('.current')
const previousEl = document.querySelector('.previous')
let currentOptEl 
let operator = ''

const checkCurrentOptEl = () => {
  if(currentOptEl){
    currentOptEl.style.background = "#f1a33c"
    currentOptEl.style.color = "white"
    }
  return  
}


const appendNumber = numStr => {
  //can't append more than one decimal point
  if( numStr === "." && currentEl.textContent.includes('.')){
    return
  }
  if(currentEl.textContent === '0'){
    if(numStr === "."){
      currentEl.textContent += numStr
    } else {
    currentEl.textContent = numStr
    }
  } else {
    currentEl.textContent += numStr  
  }
}

const compute = () => {
  let computation
  const prev = parseFloat(previousEl.textContent)
  const current = parseFloat(currentEl.textContent)
  if (isNaN(prev) && isNaN(current) || current===0 && operator!=='*'){ 
    return previousEl.textContent
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

const handleOperatorClick = opt => {
  if(!previousEl.textContent){
    previousEl.textContent = currentEl.textContent
    currentEl.textContent = '0'
    operator = opt
    return
  }
  console.log('a')
  previousEl.textContent = compute()
  currentEl.textContent = '0'
  operator = opt
  }


const allClear = () => {
  currentEl.textContent = '0'
  previousEl.textContent = ''
  operator = ''
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if(currentOptEl){
    currentOptEl.style.background = "#f1a33c"
    currentOptEl.style.color = "white"
    }
    appendNumber(button.textContent)
  })
})



addButton.addEventListener('click', () => {
  checkCurrentOptEl()
  addButton.style.background = "white"
  addButton.style.color = "#f1a33c"
  currentOptEl = addButton
  handleOperatorClick(addButton.textContent)
  })

  subtractButton.addEventListener('click', () => {
    checkCurrentOptEl()
    subtractButton.style.background = "white"
    subtractButton.style.color = "#f1a33c"
    currentOptEl = subtractButton
    handleOperatorClick(subtractButton.textContent)
    }) 
    
  divideButton.addEventListener('click', () => {
    checkCurrentOptEl()
    divideButton.style.background = "white"
    divideButton.style.color = "#f1a33c"
    currentOptEl = divideButton
    handleOperatorClick(divideButton.textContent)
    })  

    multiplyButton.addEventListener('click', () => {
      checkCurrentOptEl()
      multiplyButton.style.background = "white"
      multiplyButton.style.color = "#f1a33c"
      currentOptEl = multiplyButton
      handleOperatorClick(multiplyButton.textContent)
      })  
  



equalsButton.addEventListener('click', () => {
  checkCurrentOptEl()
  if(previousEl.textContent){
  currentEl.textContent = compute()
  previousEl.textContent = ''
  operator = ''
}})

allClearButton.addEventListener('click', () => {
  checkCurrentOptEl()
  allClear()
})

pmEl.addEventListener('click', ()=>{
  checkCurrentOptEl()
  if(isNaN(currentEl.textContent)){
    return
  }else {
    currentEl.textContent *= -1
  }
})

percentEl.addEventListener('click', ()=>{
  checkCurrentOptEl()
  if(isNaN(currentEl.textContent)){
    return
  }else {
    currentEl.textContent = (Math.round(+currentEl.textContent)/100).toString()
  }
})