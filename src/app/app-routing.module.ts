import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "Criar",
    component: CriarPensamentoComponent
  },
  {
    path: "Pensamentos",
    component: ListarPensamentoComponent
  },
  {
    path: "",
    redirectTo: "Pensamentos",
    pathMatch: "full"
  },
  {
    path: "Pensamento/Excluir/:id",
    component: ExcluirPensamentoComponent
  },
  {
    path: "Pensamento/Editar/:id",
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
