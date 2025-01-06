import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route:Router, public dataapi:DataapiService) {}

  txtusername:any;
  txtpassword:any;

  login(){
    let datalog = {
      username: this.txtusername,
      password: this.txtpassword
    };
    this.dataapi.login(datalog).subscribe(
      (response:any) =>{
        if(response.success) {
          alert(response.message);
          localStorage.setItem('token',response.token);
          this.route.navigateByUrl('/admin');
        } else {
          alert('ไม่สามารถเข้าสู่ระบบได้: ' + response.message);
        }
       }, (error) => { console.error ('Login failed: ', error);
        alert('เกิดข้อผิดพลาด');
       }
  );

}

goToRegister(){
  this.route.navigateByUrl('/register')
}
}


