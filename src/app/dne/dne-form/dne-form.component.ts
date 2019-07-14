import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cpfValidator, trimValues } from '../../shared/utils';
import { CepService } from '../../services/cep.service';
import { DneService } from '../../services/dne.service';

@Component({
  selector: 'dce-dne-form',
  templateUrl: './dne-form.component.html',
  styleUrls: ['./dne-form.component.scss']
})

export class DneFormComponent implements OnInit {
  dadosPessoais: FormGroup;
  dadosAcademicos: FormGroup;
  endereco: FormGroup;
  searchingCep = false;
  cepIsInvalid = false;
  enderecoResp: any;
  minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100));
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 16));

  // tslint:disable: object-literal-key-quotes ! Don't remove this rule
  public autenticacaoPattern = {'A': { pattern: new RegExp('[0-9a-fA-F]')}};
  public matriculaPattern = {'0': {pattern: new RegExp('[0-9]')}, 'A': {pattern: new RegExp('[a-zA-Z]')},
   'B': {pattern: new RegExp('[a-zA-Z]'), optional: true}};

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private dneService: DneService
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

    this.dadosAcademicos = this.formBuilder.group({
      matricula: ['', Validators.required],
      curso: ['', Validators.required],
      autenticacao: ['', Validators.required]
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

    this.dadosAcademicos.controls.matricula.valueChanges.subscribe(matricula => {
      if (matricula.length >= 10) {
        this.autoCompleteCurso(matricula);
      }
    });
  }

  onUploadClicked(event) {
    console.log(event);
  }

  onSelectedFilesChanged(event) {
    console.log(event);
  }

  autoCompleteCurso(matricula: string) {
    const cursos = {
      gaut: 'Engenharia de Controle e Automação',
      gel: 'Engenharia Elétrica',
      gelt: 'Engenharia Eletrônica',
      gtel: 'Engenharia de Telecomunicações'
    };
    const curso = matricula.substr(7).toLowerCase();

    if (cursos[curso] !== undefined) {
      this.dadosAcademicos.controls.curso.setValue(cursos[curso]);
    } else {
      this.dadosAcademicos.controls.matricula.setErrors({matricula: true});
    }
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

  onSubmit() {
    const obj = trimValues(this.dadosPessoais.value);
    const dneSubscription = this.dneService.createDneOrder(obj)
    .subscribe({
      next: resp => console.log(resp),
      error: err => console.log(err),
      complete: () => dneSubscription.unsubscribe()
    });
  }
}
