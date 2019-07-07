import { FormControl } from '@angular/forms';

export function cpfValidator(control: FormControl) {
  const cpf = control.value.replace(/-|\./g, ''); // remove - and .
  const cpf9 = cpf.slice(0, 9);
  const dig1 = cpf.slice(9, 10);
  const dig2 = cpf.slice(10, 11);
  let coef = 10;
  let sum = 0;
  for (let i = 0; i < cpf9.length; i++) {
    const dig = Number(cpf.charAt(i));
    sum += coef * dig;
    coef--;
  }
  let calculatedDig1 = sum * 10 % 11;
  if (calculatedDig1 === 10) {
    calculatedDig1 = 0;
  }
  const calcDig1 = String(calculatedDig1);

  coef = 11;
  sum = 0;
  for (let i = 0; i < cpf9.concat(calcDig1).length; i++) {
    const dig = Number(cpf.charAt(i));
    sum += coef * dig;
    coef--;
  }
  let calculatedDig2 = sum * 10 % 11;
  if (calculatedDig2 === 10) {
    calculatedDig2 = 0;
  }
  const calcDig2 = String(calculatedDig2);

  const isValid = (calcDig1 === dig1 && calcDig2 === dig2);

  if (!isValid) {
    return {
      cpf: true
    };
  }
  return null;
}

export function trimValues(obj: {}) {
    const copy = Object.assign({}, obj);
    for (const k in copy) {
        if (Object.prototype.toString.call(obj[k]) === '[object String]') {
            copy[k] = copy[k].trim();
        }
    }
    return copy;
}

