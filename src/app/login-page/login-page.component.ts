import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loading = false;

  constructor(private _authService: AuthService,
                public router: Router,
                private toastr: ToastrService,
                public route: ActivatedRoute)
                 { 
              }

  ngOnInit() {
  }



   onSubmit( form: NgForm) {
     let email = form.value.email;
     let password = form.value.password;
     this.loading = true;
   	this._authService.login(email, password).subscribe(

       (res)=>{
         console.log(res)
         this.handleSignin(res);
       },
       (error)=>{
        this.loading = false;
        this.toastr.error('Check your credentials and try again');
       }

       );
           
    }


     handleSignin(response) {

      console.log(response)

        if (response && response.token) {
            localStorage.setItem('admin.token', response.token);
            this.router.navigate(['/staffs']);
        } else {
          this.toastr.warning('Please try again');
        }
    }

}

