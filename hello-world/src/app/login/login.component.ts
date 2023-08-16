import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 
form!:FormGroup

constructor(private fb:FormBuilder){}
  ngOnInit(): void {
this.form=this.fb.group({
  jituEmail:[null,[Validators.required]],
  password:[null,[Validators.required]],
})
  }

  login(){
     console.log(this.form.value)
  }
}
