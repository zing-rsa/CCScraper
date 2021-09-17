import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardFilterPipe } from 'src/app/core/pipes/card-filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    CardFilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    BrowserModule
  ]
})
export class HomeModule { }
