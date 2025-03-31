export class Calculator {
  constructor() {
    this.previousOperandDiv = document.querySelector('[data-previous-operand]');
    this.currentOperandDiv = document.querySelector('[data-current-operand]');
    this.clear();

    if (!this.previousOperandDiv || !this.currentOperandDiv) {
      console.error("Елементи калькулятора не знайдені!");
      return;
    }
  }

  addNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return; 
    this.currentOperand += number.toString(); 
    this.update();
  }

  selectOperation(operation) {
    if (!this.currentOperand) return; 
    if (this.previousOperand) this.getResult(); 
    this.operation = operation; 
    this.previousOperand = this.currentOperand; 
    this.currentOperand = ''; 
    this.update(); 
  }

  getResult() {
    if (!this.previousOperand || !this.currentOperand) return; 
    const prev = parseFloat(this.previousOperand); 
    const current = parseFloat(this.currentOperand); 
    let result;
    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current !== 0 ? prev / current : 'Error'; 
        break;
      default:
        return;
    }
    this.currentOperand = result.toString(); 
    this.previousOperand = ''; 
    this.operation = undefined; 
    this.update();
  }

  update() {
    this.currentOperandDiv.innerText = this.currentOperand; 
    this.previousOperandDiv.innerText = this.operation ? `${this.previousOperand} ${this.operation}` : '';
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = ''; 
    this.operation = undefined; 
    this.update(); 
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
    this.update();
  }
}
