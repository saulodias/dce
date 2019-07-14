import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dce-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {
  register: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.register = this.formBuilder.group({
      username: ['', [Validators.required,
        Validators.max(15)]
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
        Validators.max(15)]
      ],
      repeatPassword: ['', [Validators.required,
        Validators.max(15)]
      ],
    });
  }

}
