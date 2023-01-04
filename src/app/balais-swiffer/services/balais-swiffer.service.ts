import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/env/env';
import { BalaisSwiffer } from '../models/balais-swiffer';

@Injectable({
  providedIn: 'root'
})
export class BalaisSwifferService {
  private urlApi: string;
  public collection$: Observable<BalaisSwiffer[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = this.httpClient.get<BalaisSwiffer[]>(`${this.urlApi}/balais-swiffer`);
  }
}
