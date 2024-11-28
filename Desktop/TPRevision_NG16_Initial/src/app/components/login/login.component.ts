import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../modal/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  logins: User[] = [];
  readonly loginService = inject(LoginService);
  readonly formBuilder: FormBuilder = inject(FormBuilder);
  readonly router = inject(Router);


  ngOnInit(): void {
    this.loginForm = this.formBuilder.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    // get all logins
    this.handleGetAllLogins();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  handleSubmit() {
    const login = this.logins.find(login => login.username === this.username?.value && login.pwd === this.password?.value);
    if (login) {
      if (login.role === 'Admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/directeur']);
      }
    } else {
      alert('login failed');
    }
  }

  handleGetAllLogins() {
    this.loginService.getAllLogins().subscribe(logins => {
      this.logins = logins;
    });
  }
}
