import {Component} from '@angular/core';
import {Client} from "../Interfaces/client";
import {Coworker} from "../Interfaces/coworker";
import {SalesRep} from "../Interfaces/sales-rep";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class List {
  clients: Client[] = [
    {clientID: 1, name: 'asdfsf', lastName: 'asfda', number: 54864},
    {clientID: 1, name: 'asdfsf', lastName: 'asfda', number: 54864},
    {clientID: 1, name: 'asdfsf', lastName: 'asfda', number: 54864},
    {clientID: 1, name: 'asdfsf', lastName: 'asfda', number: 54864},
    {clientID: 1, name: 'asdfsf', lastName: 'asfda', number: 54864}
  ]
  coworkers: Coworker[]=[]
  salesReps: SalesRep[]=[]
}
