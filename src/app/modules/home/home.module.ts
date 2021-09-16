import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule} from '@angular/common/http';
import { CardFilterPipe } from '../../core/pipes/card-filter.pipe';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardFilterPipe,
    HttpClientModule
  ]
})
export class HomeModule { }
