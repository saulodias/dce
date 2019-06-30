import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      nascimento: ['', Validators.required],
      email: [''],
      rg: ['', Validators.required],
      cpf: ['', Validators.required]
    });
    this.endereco = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['']
    });
  }

}
