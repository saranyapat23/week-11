import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public dataapi:DataapiService,public route:Router) { }

  txtname : any;
  txtemail : any;
  txtusername : any;
  txtpassword : any;

  ngOnInit() {
  }

    register(){
      let data = {
        name: this.txtname,
        email: this.txtemail,
        username: this.txtusername,
        password: this.txtpassword
      }
      this.dataapi.registerUsers(data).subscribe({
        next: (res:any) =>{
          alert(res.massage);
            this.route.navigateByUrl('/home');
        }, error:(error)=>{
          console.log(error);
         }
        }
    );
    }
}
