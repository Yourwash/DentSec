import {Component, Input, OnInit} from '@angular/core';
import {SalesRep} from "../../Interfaces/sales-rep";

@Component({
  selector: 'app-sales-rep',
  templateUrl: './sales-rep.component.html',
  styleUrls: ['./sales-rep.component.css']
})
export class SalesRepComponent implements OnInit{
  @Input()
  salesRep!: SalesRep;
  ngOnInit(): void {
  }
}
