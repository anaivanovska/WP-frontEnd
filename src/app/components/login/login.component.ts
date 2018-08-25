import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TokenStorage} from "../../tokenStorage";
import {User} from "../../model/user";
import {UserManagementService} from "../../services/user-management.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private userService: UserManagementService,
              private route: Router,
              private tokenStorage: TokenStorage,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tokenStorage.signOut();
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }


  login() {
    const userCredentials = this.loginForm.value;
    this.userService.login(userCredentials.username, userCredentials.password).subscribe(data => {
      console.log(data.token);
      console.log(data);
      this.tokenStorage.signIn(data.token);
      this.checkRole();
    });
  }

  checkRole() {
    this.userService.getUser().subscribe((user: User) => {
      this.tokenStorage.setUserID(user.userId);
      if (user.role === 'ROLE_PATIENT') {
        this.tokenStorage.setRole('patient');
        this.route.navigate(['/patient/' + user.userId + '/home']);
      } else if (user.role === 'ROLE_DOCTOR') {
        this.tokenStorage.setRole('familyDoctor');
        this.route.navigate(['/familyDoctor/' + user.userId + '/home']);
      } else if (user.role === 'ROLE_ADMIN') {
        this.tokenStorage.setRole('admin');
        this.route.navigate(['/admin/home']);
      }
    });
  }

}
