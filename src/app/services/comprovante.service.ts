import { Injectable } from '@angular/core';
// import fs from 'fs';
// import { PDFExtract  } from 'pdf.js-extract';
import { HttpClient } from '@angular/common/http';

const COMPROVANTE_AUTH_URL = 'https://alunos.cefet-rj.br/relatorios/publico/autenticacao/form.action';

@Injectable({
  providedIn: 'root'
})
export class ComprovanteService {

  constructor(private http: HttpClient) { }

  getComprovante(formatedGuid: string) {
    const url = COMPROVANTE_AUTH_URL;
    const body = { identificador: formatedGuid };
    return this.http.post(url, body, {responseType: 'blob'});
  }

  // extractPdfData(filename: string) {
  //   const pdfExtract = new PDFExtract();
  //   const options = {};

  //   pdfExtract.extract(filename, options, (err, data) => {
  //       if (err) { return console.log(err); }
  //       console.log(data.pages[0]);
  //   });
  // }
}
