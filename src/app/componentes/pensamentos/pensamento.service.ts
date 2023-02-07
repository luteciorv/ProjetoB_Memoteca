import { IPensamento } from './IPensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly apiRoute = " http://localhost:3000/pensamentos";

  constructor(private http: HttpClient) { }

  recuperarTodos(): Observable<IPensamento[]>{
    return this.http.get<IPensamento[]>(this.apiRoute);
  }

  recuperarPeloId(id: number): Observable<IPensamento>{
    const urlRecuperar = `${this.apiRoute}/${id}`;
    return this.http.get<IPensamento>(urlRecuperar);
  }

  criar(pensamento: IPensamento): Observable<IPensamento>{
    return this.http.post<IPensamento>(this.apiRoute, pensamento);
  }

  editar(pensamento: IPensamento): Observable<IPensamento>{
    const urlEditar = `${this.apiRoute}/${pensamento.id}`;
    return this.http.put<IPensamento>(urlEditar, pensamento);
  }

  excluir(id: number): Observable<IPensamento>{
    const urlExcluir = `${this.apiRoute}/${id}`;
    return this.http.delete<IPensamento>(urlExcluir);
  }
}
