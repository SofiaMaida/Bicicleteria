import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  url = "http://localhost:3000/api/usuarios/"
  urllogin = "http://localhost:3000/api/usuarios/login"

  constructor(private http: HttpClient) { }

  getUsuario(mail: string, password: string) : Observable<any>{
    return this.http.post(this.url, mail + password)
  }

  getUsuarios() : Observable<any> {
    return this.http.get(this.url)
  }

  getUsuariO(credentials: { mail: string, password: string }): Observable<any> {
    return this.http.post(this.urllogin, credentials);
  }
}
