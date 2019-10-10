import { Component, OnInit } from '@angular/core';

import { Contato } from '../shared/contato';
import { ContatoDataService } from '../shared/contato-data.service';
import { ContatoService } from '../shared/contato.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contatos: Observable<any>;

  constructor(private ContatoService: ContatoService, private ContatoDataService: ContatoDataService) { }

  ngOnInit() {
    this.contatos = this.ContatoService.getAll();
  }

  delete(key: string) {
    this.ContatoService.delete(key);
  }

  edit(contato: Contato, key: string) {
    this.ContatoDataService.changeContato(contato, key);
  }

}
