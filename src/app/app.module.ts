import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LinkComponent } from './link/link.component';
import { List } from './list/list.component';
import { ClientComponent } from './list/client/client.component';
import { CoworkerComponent } from './list/coworker/coworker.component';
import { SalesRepComponent } from './list/sales-rep/sales-rep.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LinkComponent,
    List,
    ClientComponent,
    CoworkerComponent,
    SalesRepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
