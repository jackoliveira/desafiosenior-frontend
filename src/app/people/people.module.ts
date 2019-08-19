import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { PeopleFormComponent } from './people-form/people-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [PeopleListComponent, PeopleFormComponent, PeopleCreateComponent, PeopleEditComponent],
  imports: [
    ToastModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    DialogModule,
    InputMaskModule,
    TooltipModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    CardModule,
    ProgressSpinnerModule,
    TableModule,
    CommonModule,
    PeopleRoutingModule
  ],
  providers: [ConfirmationService]
})
export class PeopleModule { }
