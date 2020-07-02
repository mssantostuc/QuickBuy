import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servico/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private router: Router, private usuarioservico: UsuarioServico) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean {
    return this.usuarioservico.usuario_autenticado();
  }

  public usuario_administrador(): boolean {
    return this.usuarioservico.usuario_administrador();
  }

  sair() {
    this.usuarioservico.limpar_sessao();
    this.router.navigate(['/']);
  }

  get usuario() {
    return this.usuarioservico.usuario;
  }

}
