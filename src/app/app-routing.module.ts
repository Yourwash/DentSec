import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientListComponent} from "./clients/client-list/client-list.component";
import {SalesRepComponent} from "./list/sales-rep/sales-rep.component";

const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'client-list', component: ClientListComponent },
  { path: 'salesRep-list', component: SalesRepComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
