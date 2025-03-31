import './assets/styles/main.scss';
import { Calculator } from './components/calculator.js';

document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator();

  document.querySelectorAll('[data-number]').forEach(button =>
    button.addEventListener('click', () => calculator.addNumber(button.innerText))
  );
  document.querySelectorAll('[data-operation]').forEach(button =>
    button.addEventListener('click', () => calculator.selectOperation(button.innerText))
  );
  document.querySelector('[data-equals]')?.addEventListener('click', () => calculator.getResult());
  document.querySelector('[data-delete]')?.addEventListener('click', () => calculator.delete());
  document.querySelector('[data-all-clear]')?.addEventListener('click', () => calculator.clear());
});
