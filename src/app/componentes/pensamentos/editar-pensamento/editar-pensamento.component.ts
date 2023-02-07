import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { IPensamento } from './../IPensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: IPensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.pensamentoService.recuperarPeloId(parseInt(id!)).subscribe((pensamento) =>{
      this.pensamento = pensamento;
    });
  }

  editarPensamento(): void{
    this.pensamentoService.editar(this.pensamento).subscribe(() =>{
      this.router.navigate(["/Pensamentos"]);
    });
  }
}
