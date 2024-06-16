import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonFabList, IonIcon, RouterLink],
})
export class MenuComponent {
  showEdit: boolean = false;

  @Input() showEditMenu: boolean = false;
  @Output() editViewShow = new EventEmitter<boolean>();
  @Output() createViewShow = new EventEmitter<boolean>();

  constructor() {
    addIcons({
      settingsOutline,
      addOutline,
      homeOutline,
      menu,
      pencil,
    });
  }

  returnCreateView() {
    this.createViewShow.emit(true);
  }

  returnEditView() {
    this.showEdit = !this.showEdit;
    this.editViewShow.emit(this.showEdit);
  }
}
