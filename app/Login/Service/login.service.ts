import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host: String ='http://localhost:8088/masante/api/test/';

  constructor(private http : HttpClient,private route: Router) { }

  //Methodde de connexion


  //Methodde de navigation
  goToAccueil(){
    console.log('button cliquez')
    this.route.navigate(['accueil'])
  }

  goToMedecin(){
    console.log('button cliquez')
    this.route.navigate(['liste-medecin'])
  }

  goToProfil(){
    console.log('button cliquez')
    this.route.navigate(['detail-profil'])
  }
  goToUtlisateur(){
    console.log('button cliquez')
    this.route.navigate(['liste-utilisateur'])
  }
  
}
