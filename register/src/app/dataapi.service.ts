import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor( public http:HttpClient) { }

  registerUsers(data:any){
    return this.http.post('http://localhost/classwork/project04/register.php',data);}


  login(datalog : any){
    return this.http.post('http://localhost/classwork/project04/login.php',datalog);}

  logout(){
    return this.http.post('http://localhost/classwork/project04/logout.php',{});}
  }

