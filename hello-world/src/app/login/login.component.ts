import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 
form!:FormGroup

alertMsg=''

constructor(private fb:FormBuilder,private apiService:ApiService){}
  ngOnInit(): void {
this.form=this.fb.group({
  jituEmail:[null,[Validators.required]],
  password:[null,[Validators.required]],
})
  }

  login(){
     

     this.apiService.LoginService(this.form.value).subscribe(res=>{
      
      this.alertMsg=(res as any).message
      
     })
  }
}
 