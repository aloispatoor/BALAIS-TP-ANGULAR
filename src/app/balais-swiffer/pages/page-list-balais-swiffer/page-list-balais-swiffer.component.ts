import { Component } from '@angular/core';
import { BalaisSwiffer } from '../../models/balais-swiffer';
import { BalaisSwifferService } from '../../services/balais-swiffer.service';

@Component({
  selector: 'app-page-list-balais-swiffer',
  templateUrl: './page-list-balais-swiffer.component.html',
  styleUrls: ['./page-list-balais-swiffer.component.scss']
})
export class PageListBalaisSwifferComponent {
  public collection!: BalaisSwiffer[];

  constructor(private service: BalaisSwifferService){
    this.service.collection$.subscribe((data) =>{
      this.collection = data;
      console.log(data);
    })
  }
}
