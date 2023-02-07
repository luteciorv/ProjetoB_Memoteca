import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento = {
    conteudo: "Passei a gostar muito de Angular",
    autoria: "Luís F.",
    modelo: "modelo3"
  }

  recuperarClasseLargura() : string{
    if(this.pensamento.conteudo.length >= 256){
      return "pensamento-g";
    }
    return "pensamento-p";
  }
}
