import { Component } from '@angular/core';
import { User } from '../../data/user.model';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {
  user: User;

  constructor(){
    this.user = new User();
    this.user.id = 5;
  }

  matchPasswords(form: NgForm){
    let pass1 = form.value.password;
    let pass2 = form.value.password2;
    if(pass1 != pass2)
      form.controls['password2'].setErrors({passwordMismatch:true});

  }

}
