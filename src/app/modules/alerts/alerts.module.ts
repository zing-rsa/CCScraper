import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class AlertsModule { }
