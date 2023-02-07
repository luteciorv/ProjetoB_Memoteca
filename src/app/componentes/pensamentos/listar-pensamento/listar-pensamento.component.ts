import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: "Passei a gostar muito de Angular",
      autoria: "Luís F.",
      modelo: "modelo3"
    },
    {
      conteudo: "Ansioso para a WebAPI",
      autoria: "Dev Backend",
      modelo: "modelo1"
    },
    {
      conteudo: "Pellentesque et malesuada fames ac turpis egestas. Vestibulum, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris. Quisque sit amet est et. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
      autoria: "Eu mesmo",
      modelo: "modelo1"
    }
  ];
}
