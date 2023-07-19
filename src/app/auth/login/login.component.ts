import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public LoginService: CommonService,public route:Router) {}

  ngOnInit(): void {}
  onSubmit(loginForm: NgForm) {
    console.log(loginForm, 'form');
    let payLoad = {
      email: loginForm.value.email,
      password: loginForm.value.password,
    };
    this.LoginService.login(payLoad).subscribe((res: any) => {
      if (res.id) {
        loginForm.reset()
        this.route.navigate(['/home'])
      }
    });
  }
}
