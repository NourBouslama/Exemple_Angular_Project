import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Livre } from './model/livre.model';
import { LivreService } from './services/livre.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'FrontLivres';
  items: MenuItem[];


  ngOnInit(){
      this.items = [
        {
          label:'Gestion des livres',
          icon: 'pi pi-fw pi-align-justify',
          
        },
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink:"/livres"
          },
          {
              label: 'Livre',
              icon: 'pi pi-fw pi-book',
              routerLink:"/livres",
              items: [
                {
                  label: 'Ajouter Livre',
                  icon: 'pi pi-fw pi-plus',
                  routerLink:"/add-livre",
                 
              }
            ]
          },
         
      ];
  }
}
