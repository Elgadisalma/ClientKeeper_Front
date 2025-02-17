import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  quotes = [
    "Votre confiance, notre engagement bancaire !",
    "La banque d'aujourd'hui, l'accompagnement de demain.",
    "Des solutions adaptées à vos besoins financiers.",
    "Construisons ensemble votre avenir financier.",
    "La banque qui évolue avec vous !"
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
