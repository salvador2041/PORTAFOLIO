import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true, // si estás usando standalone components
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  githubUsername = 'salvador2041'; // ✅ Asegúrate de definirla aquí
}
