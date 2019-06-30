import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CepService } from '../../services/cep.service';

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
  searchingCep = false;
  cepIsInvalid = false;
  enderecoResp: any;
  minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 65));
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 16));

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService
    ) { }

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
      celular: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', [Validators.required,
        Validators.min(4),
        cpfValidator]],
    });
    this.endereco = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required]
    });

    this.endereco.controls.cep.valueChanges.subscribe(cep => {
      if (cep.length === 8 && !this.searchingCep) {
        this.getCep(cep);
      }
    });
  }

  autoCompleteAddress() {
    console.log(this.enderecoResp);
    if (this.enderecoResp.erro === true) {
      this.endereco.controls.cep.setErrors({cep: true});
      return;
    }
    this.endereco.controls.logradouro.setValue(this.enderecoResp.logradouro);
    this.endereco.controls.bairro.setValue(this.enderecoResp.bairro);
    this.endereco.controls.cidade.setValue(this.enderecoResp.localidade);
    this.endereco.controls.uf.setValue(this.enderecoResp.uf);
  }

  getCep(value: string) {
      const subscription = this.cepService.getCep(value)
      .subscribe(
        (data) => {
          this.searchingCep = true;
          this.enderecoResp = data;
        },
        (err) => {
          console.error(err);
        },
        () => {
          this.searchingCep = false;
          this.autoCompleteAddress();
          subscription.unsubscribe();
        }
      );
  }
}
