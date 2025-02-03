import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;
  constructor(private register: FormBuilder, private router: Router) {
    this.registrationForm = this.register.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$')]],
      userName: ['',[Validators.required,Validators.minLength(3)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&-_])[A-Za-z\\d@$!%*?&-_]{8,}')
      ]],
      cPassword: ['', [Validators.required, this.passwordMatchValidator]]
    }
  );
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  passwordMatchValidator(form: any) {
    const password = form.get('password')?.value;
    const cPassword = form.get('cPassword');

    if (password !== cPassword?.value) {
      cPassword?.setErrors({ passwordMismatch: true });
    } else {
      cPassword?.setErrors(null);
    }
  }


  handleSubmitForm() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    console.log('Form Submitted:', this.registrationForm.value);
    this.router.navigate(['/login']);
  }

}
