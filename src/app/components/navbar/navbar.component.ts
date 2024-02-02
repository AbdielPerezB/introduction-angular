import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public rutas =[
    {name: 'Home', path: '/home'},
    {name: 'Perfil', path: '/perfil'},
    {name: 'Estructuras de Secuencia', path: '/estructuras-secuencia'},
    {name: 'Docs', path: '/docs'}
  ];

}
