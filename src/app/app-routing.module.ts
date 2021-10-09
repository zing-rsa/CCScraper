import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './modules/alerts/alerts.component';
import { ExplorerComponent } from './modules/explorer/explorer.component';
import { HomeComponent } from './modules/home/home.component';
import { RaritiesComponent } from './modules/rarities/rarities.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: 'rarities', component: RaritiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
