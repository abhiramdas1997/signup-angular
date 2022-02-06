import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { passwordChecker } from './custom-validator/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm = new FormGroup({});
  submitted:boolean=false;

  constructor (private formBuilder : FormBuilder){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword : ['',Validators.required],
      acceptTandC : [false,Validators.requiredTrue]
    },{
      Validators:passwordChecker('password','confirmPassword'),
    });   
  }

  //helper method
  get h(){
    return this.registerForm.controls;
  }

  onSubmit (){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert("Submitted Successfully\n" + JSON.stringify(this.registerForm.value));
  }

  onReset (){
    this.submitted=false;
    this.registerForm.reset();
  }

  
}
