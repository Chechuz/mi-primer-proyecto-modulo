import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, of } from 'rxjs';
import { CoreService } from '../../services/core.service';
import { core } from '@angular/compiler';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {
  formulario!: FormGroup;

  
  constructor(private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      id: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', []],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      password2: ['', [Validators.required]],
    }, {Validators: this.psswordMatch});
  }

  psswordMatch(formgroup: FormGroup){
    let password = formgroup.get('password')?.value;
    let password2 = formgroup.get('password')?.value;

    return password === password2 ? null : {notMatching: true};
  }

  onSubmit(){
    if(this.formulario.valid){
      console.log(this.formulario.value);
    }
  }

}

export function usernameExistsValidator(coreService: CoreService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const username = control.value;

    // Si el valor está vacío, devolvemos null inmediatamente
    if (!username) {
      return of(null);
    }

    // Verificar si el nombre de usuario existe
    return of(coreService.checkUsernnameExists(username)).pipe(
      map((result) => (result ? { usernameExists: true } : null))
    );
  };
}
