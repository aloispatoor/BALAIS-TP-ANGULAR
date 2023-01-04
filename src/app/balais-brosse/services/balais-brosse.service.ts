import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/env/env';
import { BalaisBrosse } from '../models/balais-brosse';

@Injectable({
  providedIn: 'root'
})
export class BalaisBrosseService {
  private urlApi: string;
  public collection$: Observable<BalaisBrosse[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = this.httpClient.get<BalaisBrosse[]>(`${this.urlApi}/balais-brosse`);
  }
}
