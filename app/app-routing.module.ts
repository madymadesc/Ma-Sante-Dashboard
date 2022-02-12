import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './Login/login/login.component';
import { DetailMedecinComponent } from './Medecin/detail-medecin/detail-medecin.component';
import { ListeMedecinComponent } from './Medecin/liste-medecin/liste-medecin.component';
import { DetailProfilComponent } from './Profil/detail-profil/detail-profil.component';
import { ModifierProfilComponent } from './Profil/modifier-profil/modifier-profil.component';
import { DetailUtilisateurComponent } from './Utilisateur/detail-utilisateur/detail-utilisateur.component';
import { ListeUtilisateurComponent } from './Utilisateur/liste-utilisateur/liste-utilisateur.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },

  
  // Gestion Utilisateurs
  { path: 'liste-utilisateur', component: ListeUtilisateurComponent },
  { path: 'detail-utilisateur/:id', component: DetailUtilisateurComponent },

  // Gestion Medecin
  { path: 'liste-medecin', component: ListeMedecinComponent },
  { path: 'detail-medecin/:id', component: DetailMedecinComponent },

  //Gestion du profil
  { path: 'modifier-profil', component:ModifierProfilComponent },
  { path: 'detail-profil', component:DetailProfilComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
