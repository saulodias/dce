import { Component, OnInit } from '@angular/core';
import { ComprovanteService } from '../services/comprovante.service';

@Component({
  selector: 'dce-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private comprovanteService: ComprovanteService) { }

  ngOnInit() {
    // this.comprovanteService.getComprovante('09F4.344D.E87A.5CB8.7D82.8110.EE75.BFA2').subscribe(
    //   (resp) => {
    //     console.log(resp);
    //   }
    // );
  }

}
