import { Component } from '@angular/core';

@Component({
  selector: 'app-client-navbar',
  standalone: false,
  templateUrl: './client-navbar.component.html',
  styleUrl: './client-navbar.component.css'
})
export class ClientNavbarComponent {
  showBalance = false;

  toggleBalance() {
    this.showBalance = !this.showBalance;
  }
}
