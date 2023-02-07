import { PensamentoService } from './../pensamento.service';
import { IPensamento } from './../IPensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: IPensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router){ }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  criarPensamento() : void{
    this.pensamentoService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/Pensamentos"])
    });
  }
}
