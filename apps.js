//TEST JS FILE, trying to work out bodmas


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
let inputs = []
let operators = []
let inputIndex = 0
let operatorIndex = 0


const appendNumber = numStr =>{
  if(numStr === '.' && currentEl.textContent.includes(".")){
    return
  }else if (currentEl.textContent === '0'){
    if(numStr === '.'){
    currentEl.textContent +=numStr
    }else {
      currentEl.textContent = numStr
    }
  } else {
    currentEl.textContent += numStr
  }

}

const populatingInputAndOptArr = opt =>{
  inputs[inputIndex] = currentEl.textContent;
  currentEl.textContent = '0'
  operators[operatorIndex] = opt;
  inputIndex++
  operatorIndex++

}

const compute = () =>{
  if(operatorIndex === 1){
    if(operators[0] === "+" || operators[0] === '-'){
      return
    }else {
    inputs[0] = (+inputs[0] +operators[0] +inputs[1]).toString()
    inputs[1] = ''
    inputIndex = 1
    operatorIndex = 0
  }
  } else if  (operatorIndex === 2){
    if(operators[1] === "+" || operators[1] === "-"){
    inputs[0] = (+inputs[0] +operators[0] +inputs[1] +operators[1] +inputs[2]).toString()
    inputs[1] = ''
    inputs[2] = ''
    inputIndex = 1
    operatorIndex = 0
    return inputs[0]
    } else {
      inputs[1] = (+inputs[1] +operators[1] +inputs[2]).toString()
      inputs[2] = ''
      inputIndex = 2
      operatorIndex = 1
      return 
      inputs[1]
    }

  }
}


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
   appendNumber(button.textContent)
  })
})

addButton.addEventListener('click', ()=>{
  populatingInputAndOptArr(addButton.textContent)
  if(inputIndex === 2){
    compute()
  }
})