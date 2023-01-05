import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { List } from './list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientListComponent } from './clients/client-list/client-list.component';
import { SalesRepListComponent } from './salesReps/sales-rep-list/sales-rep-list.component';
import { ClientsModule } from './clients/clients.module';
import { SalesRepsModule } from './salesReps/sales-reps.module';
import {ClientComponent} from "./clients/client-list/client/client.component";
import {SalesRepComponent} from "./salesReps/sales-rep-list/sales-rep/sales-rep.component";



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    List,
    ClientComponent,
    SalesRepComponent,
    AddFormComponent,
    ClientListComponent,
    SalesRepListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsModule,
    SalesRepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
