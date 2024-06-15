import { Component, Input, OnInit } from '@angular/core';
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  settingsOutline,
  addOutline,
  homeOutline,
  menu,
  pencil,
} from 'ionicons/icons';
import {
  RouterLink,
  NavigationEnd,
  Router,
  RouteConfigLoadEnd,
  ResolveEnd,
  ActivationEnd,
  GuardsCheckEnd,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonFabList, IonIcon, RouterLink],
})
export class MenuComponent {
  @Input() showEdit: boolean = false;
  @Input() callbackFunction?: void;

  constructor() {
    addIcons({
      settingsOutline,
      addOutline,
      homeOutline,
      menu,
      pencil,
    });
  }
}
