import {Component, Input, OnInit} from '@angular/core';
import {Coworker} from "../../Interfaces/coworker";

@Component({
  selector: 'app-coworker',
  templateUrl: './coworker.component.html',
  styleUrls: ['./coworker.component.css']
})
export class CoworkerComponent implements OnInit{

  @Input()
  coworker!: Coworker;
  ngOnInit(): void {
  }

}
