import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';


const routes: Routes = [
  // Rotas da aplicacao
  { path: '', pathMatch: 'full', redirectTo: 'list', component: PeopleListComponent },
  // Lista as pessoas
  { path: 'list', component: PeopleListComponent },
  // Formulario de criacao de pessoas
  { path: 'create', component: PeopleCreateComponent },
  // Formulario de edicao de pessoas
  { path: 'edit/:id', component: PeopleEditComponent },
  // Helper que redireciona qualquer rota nao mapeada para a home.
  { path: '**', component: PeopleListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
