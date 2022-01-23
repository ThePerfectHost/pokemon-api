import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent {
  checkInForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.checkInForm = this.formBuilder.group({
      nombre: formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-z -]*$'),
      ]),
      apellido: formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[A-Za-z -]*$'),
      ]),
      edad: formBuilder.control('', [
        Validators.required,
        Validators.min(6),
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  public control(name: string) {
    return this.checkInForm.get(name);
  }

  public onSubmit() {
    const nombre = this.checkInForm.value.nombre;
    const apellido = this.checkInForm.value.apellido;

    this.router.navigate(['/home'], {
      queryParams: { user: nombre + ' ' + apellido },
    });
  }
}
