class Calculator {
  constructor(previousOperandDiv, currentOperandDiv) {
    this.previousOperandDiv = previousOperandDiv
    this.currentOperandDiv = currentOperandDiv
    this.clear()
  }

  addNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  selectOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') this.getResult()

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  getResult() {
    let result
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    switch (this.operation) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '*':
        result = prev * current
        break
      case '/':
        result = prev / current
        break
      default:
        throw new Error('Something went wrong')
    }
    this.currentOperand = result
    this.operation = undefined
    this.previousOperand = ''
  }

  update() {
    this.currentOperandDiv.innerText = this.currentOperand
    if (this.operation != null) {
      this.previousOperandDiv.innerText = `${this.previousOperand} ${this.operation}`
    } else {
      this.previousOperandDiv.innerText = ''
    }
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandDiv = document.querySelector('[data-previous-operand]')
const currentOperandDiv = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandDiv, currentOperandDiv)
console.log(calculator)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.addNumber(button.innerText)
    calculator.update()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.selectOperation(button.innerText)
    calculator.update()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.getResult()
  calculator.update()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.update()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.update()
})