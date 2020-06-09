import { Component } from "@angular/core"

@Component({
  selector: "produto",
  template: "<html><body>{{obterNome() }} </body></html>"
})

export class ProdutoComponent { //Nome das classes começando com maiusculo por conta da convençã PascalCase

  //camelCase para variaveis, atributos e nome das funções 
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    //return this.nome;
    return "produto samsung";
  }
}
