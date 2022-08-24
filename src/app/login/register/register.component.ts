import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/shared/customvalidation.service';
import { UsersService } from 'src/app/users/users.service';
import Swal from 'sweetalert2';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/_services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    role:null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  faArrowLeft = faArrowLeft;

  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, email, password ,role} = this.form;
    //console.log(this.form.role);
    this.authService.register(username, email, password, role).subscribe({
      
      next: (data) => {

        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this._router.navigate(['/login']);
        Swal.fire({
          icon: 'success',
          title: 'Welcome',
          text: 'Merci de verifier votre email' + this.form.email,
        });
      },
     /* error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        Swal.fire({
          title: 'Vous êtes déjà membre?',
          text: 'cette email existe déja, veuillez vous authentifier',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#c1d35d',
          cancelButtonColor: '#4dbfe4',
          confirmButtonText: "S'authentifier",
        }).then((result) => {
          if (result.isConfirmed) {
            this._router.navigate(['/login']);
          }
        });
      },*/
    });
  }

}
