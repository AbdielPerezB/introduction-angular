import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  public rutas =[
    {name: 'Home', path: '/home'},
    {name: 'Perfil', path: '/perfil'},
    {name: 'Estructuras de Secuencia', path: '/estructuras-secuencia'},
    {name: 'Docs', path: '/docs'}
  ];
  public existHome:boolean = true;
  ngOnInit(): void {
    this.existHome = this.rutas[0].name == 'Home'? true : false;
    console.log(this.existHome);
  }

}
