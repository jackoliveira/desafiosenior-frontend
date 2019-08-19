import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/shared/services/people.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  providers: [MessageService]
})
export class PeopleListComponent implements OnInit {
  // Loading spinner.
  public loading: boolean = false;
  public people: any[];
  constructor(private peopleService: PeopleService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  // Metodo que deleta um registro pelo seu ID.
  deletePerson({ id }) {
    // Servico de confirmacao, modal de confirmacao da acao.
    this.confirmationService.confirm({
        message: 'Confirma a acao de deletar o registro',
        accept: () => {
            this.peopleService.delete(id)
              .subscribe((data) => {
                  // Em caso de sucesso exibe uma mensagem para o usuario.
                  this.messageService.add({ severity: 'success', summary: 'Deletado com sucesso!', detail: 'Êxito ao deletar o registro!'} );
                  // Em caso de erro exibe uma mensagem de alerta para o usuario.
                }, (error) => {
                  this.messageService.add({ severity: 'error', summary: 'Erro ao deletar!', detail: 'Nao foi possivel deletar o registro!'})
                }
              )
        }
    });
  }

  // Ao iniciar faz a busca das pessoas na API e carrega os dados.
  ngOnInit() {
    this.loading = true;
    this.peopleService.get().subscribe(
      (data) => { this.loading = false; this.people = data; })
  }

}
