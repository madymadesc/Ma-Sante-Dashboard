import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/Service/login.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor( private service : LoginService) { }

  ngOnInit(): void {
  }

  home(){
    this.service.goToAccueil();
  }
  medecin(){
    this.service.goToMedecin();
  }
  profil(){
    this.service.goToProfil();
  }
  utilisateur(){
    this.service.goToUtlisateur();
  }

}
