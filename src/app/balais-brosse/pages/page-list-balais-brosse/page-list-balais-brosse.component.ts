import { Component } from '@angular/core';
import { BalaisBrosse } from '../../models/balais-brosse';
import { BalaisBrosseService } from '../../services/balais-brosse.service';

@Component({
  selector: 'app-page-list-balais-brosse',
  templateUrl: './page-list-balais-brosse.component.html',
  styleUrls: ['./page-list-balais-brosse.component.scss']
})
export class PageListBalaisBrosseComponent {
  public collection!: BalaisBrosse[];

  constructor(private service: BalaisBrosseService){
    this.service.collection$.subscribe((data) =>{
      this.collection = data;
      console.log(data);
    })
  }
}
