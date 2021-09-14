import { Component } from '@angular/core';
import {InfoVentasService} from '../app/services/info-ventas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ventasApp';

  constructor(public InfoVentas:InfoVentasService){

  }
}
