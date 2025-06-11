import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  githubUsername = 'Salv_PorG';
  title = 'PORTAFOLIO';
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if ((window as any).HSStaticMethods?.autoInit) {
            (window as any).HSStaticMethods.autoInit();
          } else {
            console.warn('HSStaticMethods o autoInit no están disponibles aún');
          }
        }, 100);

      }
    }
    );
  }
}