import { DetailsService } from './details.service';
import { Component, OnInit } from '@angular/core';
import { Users } from './details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  users: Users[];
  consultorias: any[];
  status: any[];

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.detailsService.listarUsers().subscribe(data => this.users = data);
    this.detailsService.listarConsultorias().subscribe(data => this.consultorias = data);
    this.detailsService.listarStatus().subscribe(data => this.status = data);
  }
}
