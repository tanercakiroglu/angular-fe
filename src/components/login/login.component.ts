import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first} from 'rxjs/operators';
import { Pipe } from '@angular/core';



@Component({
    selector:'login-component',
    templateUrl:'./login.html',
    providers:[LoginService]
   
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    title = 'Login-Registeration';
    loading = false;
    submitted= false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService
       ) {}
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            vkn: ['', Validators.required],
            phoneNumber: ['', Validators.required]
        });
    }
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.loginService.login(this.f.email.value, this.f.password.value,this.f.vkn.value,this.f.phoneNumber.value)
        .pipe(first())
        .subscribe(
            data => {
                console.log(data);
                this.loading = false;
            },
            error => {
                console.log(error);
                this.loading = false;
            });
        
            
       
    }
   
  }