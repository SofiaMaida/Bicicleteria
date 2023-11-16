import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioServiceService } from '../services/usuario.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  listUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioServiceService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe({
      next: data => {
        console.log(data);
        this.listUsuarios = data
      }, error: err => {
        console.log(err)
      }
    })
  }

}
