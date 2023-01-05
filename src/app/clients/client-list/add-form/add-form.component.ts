import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientAddForm} from "../../Interfaces/client-add-form";
import {Client} from "../../Interfaces/client";
import {ClientComponent} from "../client/client.component";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {


  name!: string;
  lastName!: string;
  number!: number;
  dob!: string;
  email!: string;

  clientForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    dob: new FormControl('')
  })

  clients: ClientAddForm[] = [];


  addClient() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.clientForm.value);
    this.clients.push({name: this.clientForm.get('name')?.getRawValue(),
      lastName: this.clientForm.get('lastName')?.getRawValue(),
      email: this.clientForm.get('email')?.getRawValue(),
      number: this.clientForm.get('number')?.getRawValue(),
      dob: this.clientForm.get('dob')?.getRawValue()})
  }

  bob() {
    return {
      name: this.clientForm.get('name'),
      lastName: this.clientForm.get('lastName'),
      email: this.clientForm.get('email'),
      number: this.clientForm.get('number'),
      dob: this.clientForm.get('dob')
    }

  }

  show = false;

  showClient() {
    this.show! ? this.show = false : this.show = true;
    console.log(this.show)
  }

}
