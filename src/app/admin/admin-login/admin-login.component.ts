import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email:string="";//admin email
  password:string="";//admin password
  emailError:string="";//email validation
  passwordError:string="";//password validation
  error:{name:string,message:string}={name:'',message:''};//firebase error handle

  constructor(private authSer:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  //admin login
  loginAdmin(){
    if(this.validateForm(this.email,this.password)){
      this.authSer.loginAdminWithEmail(this.email,this.password).then(()=>{
        this.router.navigate(['/dashboard']);
      }).catch(error=>{
        this.error=error;
        this.router.navigate(['']);
      })
    }
  }

  //form validation
  validateForm(email:string,password:string):boolean{
    if(email.length===0){
      this.emailError="please enter email";
      return false;
    }
    if(password.length===0){
      this.passwordError="please enter password";
      return false;
    }

    return true;
  }

}
