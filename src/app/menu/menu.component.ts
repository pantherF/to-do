import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {
  settingsOutline,
  addOutline,
  homeOutline,
  menu,
  pencil,
} from 'ionicons/icons';
import {RouterLink} from '@angular/router';
import {ClickOutsideDirective} from "../click-outside.directive";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonFabList, IonIcon, RouterLink, ClickOutsideDirective],
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

  onClickOutside() {
      // add close menu logic
    // console.log("menu close")
  }
}
