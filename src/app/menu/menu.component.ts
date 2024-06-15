import { Component, OnInit } from '@angular/core';
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
import { RouterLink, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonFabList, IonIcon, RouterLink],
})
export class MenuComponent implements OnInit {
  showEdit: boolean = false;

  constructor(private router: Router) {
    addIcons({
      settingsOutline,
      addOutline,
      homeOutline,
      menu,
      pencil,
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/to-do') {
        console.log(event.url);
        this.showEdit = true;
      } else {
        this.showEdit = false;
      }
    });
  }
}