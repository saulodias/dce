import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CepService {
  constructor(private http: HttpClient) { }

  url = 'https://viacep.com.br/ws/';
  type = '/json/';

  getCep(value: string) {
    const cepnum = Number(value.replace(/-/g, ''));
    return this.http.get(this.url + cepnum + this.type);
  }
}
