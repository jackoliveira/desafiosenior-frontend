import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [NavbarComponent, BreadcrumbComponent],
  imports: [
    BreadcrumbModule,
    MenuModule,
    HttpClientModule,
    CommonModule,
    ToastModule,
  ],
  exports: [
    BreadcrumbComponent,
    NavbarComponent,
    HttpClientModule,
    ToastModule,
    CommonModule,
    TableModule
  ]
})
export class SharedModule { }
