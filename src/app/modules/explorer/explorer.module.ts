
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './explorer.component';
import { DataTablesModule } from 'angular-datatables';
import { PaginatorPipe } from 'src/app/core/pipes/paginator.pipe';

@NgModule({
  declarations: [
    ExplorerComponent,
    PaginatorPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule
  ]
})
export class ExplorerModule { }
