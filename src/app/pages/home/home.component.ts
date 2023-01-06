import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  Nombre!:String;
  email!: String;
  telefono!: String;
  asunto!: String;
  Mensaje! : String;
  
  public formContacto : FormGroup = this.formBuilder.group({
    Nombre:[" ",
    [
      Validators.required,
      Validators.minLength(10)
    ]
  ],
  email:["",
    [
      Validators.required,
      Validators.email
    ]
  ],
  telefono:["",
    [
      Validators.required,
      Validators.maxLength(9)
    ]
  ],
  asunto:["",
  [
    Validators.required,
  ]
  ],
  Mensaje:["",
  [
    Validators.required,
  ]
  ]

  });
  constructor(private formBuilder:FormBuilder) {
  }
  
  send(control: string){
    return(
      this.formContacto.controls[control].errors &&
      this.formContacto.controls[control].touched
    
    );
  }
  
}
