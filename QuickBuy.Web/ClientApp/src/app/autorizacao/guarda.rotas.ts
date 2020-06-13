import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioServico } from "../servico/usuario/usuario.servico";

@Injectable({
  providedIn: 'root'
})
export class GuardaRotas implements CanActivate {

  //private router: Router;
  br
  constructor(private router: Router, private usuarioServico: UsuarioServico) {
   // router = new Router();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //var autenticado = sessionStorage.getItem("usuario-autenticado");
    if (this.usuarioServico.usuario_autenticado()) {
      return true;
    }
    //alert(state.url);
     // sessionStorage.setItem("usuario-autenticado", "0");
      this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
      return false;
    
      
   }

    

}
