import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../../tokenStorage";
import {UserManagementService} from "../../services/user-management.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {User} from "../../model/user";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePassForm: FormGroup;
  role: string;
  constructor(private tokenStorage: TokenStorage,
              private userService: UserManagementService,
              private formBuilder: FormBuilder,
              private route: Router,
              private  activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
    this.changePassForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      matchingPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  changePassword() {
    const formValues = this.changePassForm.value;
    const userId = this.activeRoute.snapshot.paramMap.get('userId');
    this.userService.changeUserPassword(formValues.oldPassword,
                                        formValues.password,
                                        formValues.matchingPassword,
                                        userId)
      .subscribe((user: User) => {
      if (isNullOrUndefined(user)) {
        alert('Something went wrong');
      } else {
        this.route.navigate(['/login']);

      }
    });
  }

}
