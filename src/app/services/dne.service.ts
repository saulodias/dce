import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ROOT_URL = 'https://localhost:44319/api/';

const PATH = {
  USER: 'Users'
};

const options = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

function getUrl(path: string) {
  return ROOT_URL + path;
}

@Injectable({
  providedIn: 'root'
})
export class DneService {
  constructor(private http: HttpClient) {
  }

  createDneOrder(formData: any) {
    return this.http.post(getUrl(PATH.USER), formData, options);
  }
}
