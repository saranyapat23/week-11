import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    public dataapi : DataapiService,
    public router : Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.dataapi.logout().subscribe({
      next: ()=> {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
      },
      error:(err) =>{
        console.error('ล็อกเอ้าท์ไม่สำเร็จ:', err);
        alert('Error: ${err.message}');
      }
    });
  }
}
