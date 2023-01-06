import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public formContacto! : FormGroup;
  Nombre!:String;
  email!: String;
  telefono!: String;
  asunto!: String;
  Mensaje! : String

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formContacto = this.formBuilder.group({
      Nombre:[" ",
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],

    })
    
  }

  send():any{

  }

}
