import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonButton, IonIcon, IonList, IonItem, IonLabel, IonGrid, IonRow, IonButtons, IonBackButton, IonMenuButton, IonFooter } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import {addIcons} from 'ionicons';
import {home, man, book, heart, bagAdd, chatbox, search, person, settings, sunny, moon} from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFooter, IonBackButton, IonButtons, IonRow, IonGrid, IonLabel, IonItem, IonIcon, IonButton, IonImg, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonList, RouterLink, IonMenuButton],
})
export class HomePage {
  isDarkMode = false; // Variable to track dark mode state
  
  constructor(private router: Router) {
    addIcons({home, man, book, heart, bagAdd, chatbox, search, person, settings, sunny, moon});// Register the icon
    this.isDarkMode = document.body.classList.contains('dark'); // Check if dark mode is enabled
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
