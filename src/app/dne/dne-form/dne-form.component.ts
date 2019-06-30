import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

function cpfValidator(control: FormControl) {
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
  if (calculatedDig1 === 10) { calculatedDig1 = 0; }
  const calcDig1 = String(calculatedDig1);

  coef = 11;
  sum = 0;
  for (let i = 0; i < cpf9.concat(calcDig1).length; i++) {
    const dig = Number(cpf.charAt(i));
    sum += coef * dig;
    coef--;
  }
  let calculatedDig2 = sum * 10 % 11;
  if (calculatedDig2 === 10) { calculatedDig2 = 0; }
  const calcDig2 = String(calculatedDig2);

  const isValid = (calcDig1 === dig1 && calcDig2 === dig2);

  if (!isValid) {
    return {
      cpf: true
    };
  }
  return null;
}


@Component({
  selector: 'dce-dne-form',
  templateUrl: './dne-form.component.html',
  styleUrls: ['./dne-form.component.scss']
})

export class DneFormComponent implements OnInit {
  dadosPessoais: FormGroup;
  endereco: FormGroup;

  minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 65));
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 16));

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dadosPessoais = this.formBuilder.group({
      nome: ['', [Validators.required,
        Validators.max(15)]
      ],
      sobrenome: ['', [Validators.required,
        Validators.max(30)]
      ],
      nascimento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rg: ['', Validators.required],
      cpf: ['', [Validators.required,
        Validators.min(4),
        cpfValidator]],
    });
    this.endereco = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['']
    });
  }
}
