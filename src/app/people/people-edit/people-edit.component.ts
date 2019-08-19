import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/shared/services/people.service';
import { Person } from 'src/app/shared/models/person.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  providers: [MessageService]
})
export class PeopleEditComponent implements OnInit {
  // Expoe o objeto pessoa para o form.
  @Output() person: Person;
  loading: boolean = false;
  constructor(private router: ActivatedRoute,
              private peopleService: PeopleService,
              private messageService: MessageService,
              ) { }

  ngOnInit() {

    // Controla o spinner de loading.
    this.loading = true;

    // Recebe o id da URL da pessoa e busca por esse ID na API.
    const id = this.router.snapshot.paramMap.get('id');
    this.peopleService.get(id)
      .subscribe(
          // Em caso de sucesso popula o objeto PERSON.
        (data: Person) => {
          this.loading = false; this.person = data;
        },
        (error) => {
          // Em caso de erro exibe uma mensagem para o usuario.
          this.messageService.add({ severity: 'error', summary: 'Falha no carregamento', detail: 'Erro ao carregar informações!'} );
        }
      )
  }

  // Metodo que atualiza as informacoes na API com os dados recebidos do people-form.
  editForm(item) {
    this.peopleService.put(item, this.router.snapshot.paramMap.get('id'))
    .subscribe(
      // Em caso de sucesso exibe uma mensagem para o usuario.
      (data: Person) => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Editado com sucesso!', detail: 'Êxito ao salvar as informações!'} );
      },
      // Em caso de erro exibe uma mensagem de alerta para o usuario.
     (error) => { this.messageService.add({ severity: 'error', summary: 'Falha na edicao', detail: 'Erro ao salvar as informações!'} ) }
    )
  }
}
