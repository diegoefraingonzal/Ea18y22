import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,

} from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  latitude: number | null = null;
  longitude: number | null = null;

  constructor() {}

  getCurrentPosition = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log('Latitud:', this.latitude);
      console.log('Longitud:', this.longitude);
    } catch (error) {
      console.error('Error obteniendo la ubicación', error);
    }
  };
}