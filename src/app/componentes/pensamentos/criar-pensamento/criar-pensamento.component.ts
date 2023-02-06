import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: "1",
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: "modelo2"
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  criarPensamento() : void{
    alert("Você acabou de criar um novo pensamento");
  }

  cancelarPensamento() : void{
    alert("O pensamento foi cancelado!");
  }
}
