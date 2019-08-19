import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Person } from 'src/app/shared/models/person.model';
import { Phone } from 'src/app/shared/models/phone.model';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  providers: [MessageService]
})
export class PeopleFormComponent implements OnInit {
  peopleForm: FormGroup;

  // Emite um evento com o valor do formulario, seja para criacao ou edicao.
  @Output() formEmmiter = new EventEmitter();

  // Recebe um objeto tipo pessoa.
  @Input() person: Person;
  public phoneTypes = [
      { label:'Selecione', value: null },
      { label:'Celular', value: 'Celular' },
      { label:'Telefone fixo', value: 'Fixo' },
    ]

  constructor(private formBuilder: FormBuilder,
              private messageService: MessageService) { }

  // Getter que retorna todos os telefones para o formulario.
  get phones() { return this.peopleForm.get('phones') as FormArray; }
  removePhone(item) { this.phones.removeAt(item) }
  
  addPhone() { 
    this.phones.push(
      this.formBuilder.group({
        type: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(15) ]],
        ddi: ['', [ Validators.required,  Validators.minLength(1), Validators.maxLength(5) ]],
        ddd: ['', [ Validators.required,  Validators.minLength(2), Validators.maxLength(2) ]],
        number: ['', [ Validators.required,  Validators.minLength(9), Validators.maxLength(10) ]],
        ext: ['', [ Validators.minLength(1), Validators.maxLength(6) ]]
      })
    );
  }

  ngOnInit() {
    this.peopleForm = this.formBuilder.group({
      name: [this.person.name, [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]],
      age: [this.person.age, [ Validators.required,  Validators.minLength(1), Validators.maxLength(3), Validators.min(1), Validators.max(120) ]],
      address: this.formBuilder.group({
        type: [this.person.address.type, [ Validators.required, Validators.minLength(3), Validators.maxLength(15) ]],
        number: [this.person.address.number, [ Validators.required, Validators.minLength(1), Validators.maxLength(15) ]],
        name: [this.person.address.name, [ Validators.required, Validators.minLength(3) ]],
        zipcode: [this.person.address.zipcode, [ Validators.required, Validators.minLength(10), Validators.maxLength(10) ]]
      }),
      phones: this.formBuilder.array([])
    })

    if (this.person.phones.length && this.person.phones[0].number) { this.addFormEditPhones(this.person.phones) }
  }

  // Preenche os telefones existentes na pessoa dentro da tela de edicao.
  addFormEditPhones(phones: Phone[]) {
    phones.forEach(phone => {
      this.phones.push(
        this.formBuilder.group({
          type: [phone.type, [ Validators.required, Validators.minLength(3), Validators.maxLength(15) ]],
          ddi: [phone.ddi, [ Validators.required,  Validators.minLength(1), Validators.maxLength(5) ]],
          ddd: [phone.ddd, [ Validators.required,  Validators.minLength(2), Validators.maxLength(2) ]],
          number: [phone.number, [ Validators.required,  Validators.minLength(9), Validators.maxLength(10) ]],
          ext: [phone.ext, [ Validators.minLength(1), Validators.maxLength(6) ]]
        })
      );
    })
    
  }

  // Metodo que retorna se o campo esta valido ou nao.
  validationHelper(item) {
    return (!this.peopleForm.get(item).valid && this.peopleForm.get(item).dirty)
  }

  // So habilita caso os campos estejam todos validos.
  // Ao salvar caso de certo, reseta o formulario e envia os valores para a api.
  onSubmit() {
    if (this.peopleForm.valid) {
      this.formEmmiter.emit(this.peopleForm.value);
      this.peopleForm.reset();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Falha no formulario, verifique os campos e tente novamente.', detail: 'Erro ao enviar informações!'} );
    }
  }

}
