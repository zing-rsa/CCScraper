import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CardFilterPipe } from './core/pipes/card-filter.pipe';
import { ComponentComponent } from './modules/alers/component/component.component';


@NgModule({
  declarations: [
    AppComponent,
    CardFilterPipe,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
