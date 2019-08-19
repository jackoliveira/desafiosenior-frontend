import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/shared/services/people.service';
import { Person } from 'src/app/shared/models/person.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  providers: [MessageService]
})
export class PeopleCreateComponent implements OnInit {
  peopleForm: FormGroup;

  // Controla o loading spinner.
  loading: boolean = false;
  @Input() person = new Person;
  constructor(private formBuilder: FormBuilder,
              private peopleService: PeopleService,
              private messageService: MessageService) { }

  ngOnInit() {}

  // Metodo que envia as informacoes do formulario people-form para a API.
  createForm(item) {
    this.loading = true;
    this.peopleService.post(item)
      .subscribe(
        // Em caso de sucesso exibe uma mensagem para o usuario.
        (data: Person) => { 
          this.loading = false;
          this.messageService.add({ severity: 'success', summary: 'Criado com sucesso!', detail: 'Êxito ao salvar as informações!'} );
        },
        // Em caso de erro exibe uma mensagem de alerta para o usuario.
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Falha na criação', detail: 'Erro ao salvar as informações!'} );
        }
    )
  }

}
