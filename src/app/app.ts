import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './componentes/navbar/navbar';
import { BarraNavegacao } from './componentes/barra-navegacao/barra-navegacao';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,BarraNavegacao],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'simulado-angular';
}
