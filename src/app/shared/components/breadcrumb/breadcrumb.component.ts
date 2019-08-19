import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  home: MenuItem;
  items: MenuItem[];
  constructor(private router: Router) { }

  // Componente para ajudar na navegacao.
  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.items = [
      { label: 'Listar', routerLink: '/', icon: 'pi pi-list' },
      { label: 'Adicionar', routerLink: '/create', icon: 'pi pi-plus' }
    ]
  }


}
