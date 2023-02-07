import { PensamentoService } from './../pensamento.service';
import { IPensamento } from './../IPensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: IPensamento[] = [];

  constructor(private pensamentoService: PensamentoService){ }

  ngOnInit(): void {
    this.pensamentoService.recuperarTodos().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
