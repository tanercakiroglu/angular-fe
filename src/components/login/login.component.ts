import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first} from 'rxjs/operators';





@Component({
    selector:'login-component',
    templateUrl:'./login.html',
    providers:[LoginService],
    styleUrls: ['./login.css']
   
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    title = 'Login-Registeration';
    loading = false;
    submitted= false;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService
       ) {}
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email:       ['',  Validators.compose(
                         [Validators.email, Validators.required])],
            password:    ['', Validators.required],
            vkn:         ['', Validators.compose(
                         [Validators.pattern('^[0-9]*$'), Validators.required])],
            phoneNumber: ['', Validators.compose(
                         [Validators.pattern('^[0-9]{10}$'), Validators.required])]
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