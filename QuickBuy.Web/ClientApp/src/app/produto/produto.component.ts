import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servico/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls:["./produto.component.css"]
})

export class ProdutoComponent implements OnInit { //Nome das classes começando com maiusculo por conta da convençã PascalCase

  //camelCase para variaveis, atributos e nome das funções 
  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spinner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }
  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem('produtoSession');
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    } else {
      this.produto = new Produto();
    }
    
  }

  public inputChange(files: FileList) {
    //alert(this.arquivoSelecionado.name);

    this.arquivoSelecionado = files.item(0);    
    this.ativar_spinner = true;
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          //alert(this.produto.nomeArquivo);
          console.log(nomeArquivo);
          this.ativar_spinner = false;
        },
        e => {
          console.log(e.error);
          this.ativar_spinner = false;
        }
      );
  }

  public cadastrar() {
    //alert("aqui");
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          this.desativarEspera();
          this.router.navigate(['/pesquisar-produto']);
        },
        e => {
          console.log(e.error);
          this.mensagem = e.error;
          this.desativarEspera();
          
        }
      );
  }
  public ativarEspera() {
    this.ativar_spinner = true;
  }
  public desativarEspera() {
    this.ativar_spinner = false;
  }
}
