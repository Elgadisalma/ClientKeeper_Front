import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule pour ngClass

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ Si tu veux garder standalone
  imports: [CommonModule], // ✅ Ajoute CommonModule ici
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
