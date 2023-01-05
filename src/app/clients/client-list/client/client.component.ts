import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../Interfaces/client";
import {List} from "../list.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  @Input()
  client!: Client;
  ngOnInit(): void {
  }
}

