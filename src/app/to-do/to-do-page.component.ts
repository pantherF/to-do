import {ChangeDetectorRef, Component, EventEmitter} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonIcon,
  IonCheckbox,
  IonButton,
  IonReorderGroup,
  IonButtons,
  IonReorder,
  IonModal,
  IonInput,
  IonFooter,
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {
  archiveOutline,
  trashOutline,
  close,
  createOutline,
} from 'ionicons/icons';
import {ItemReorderEventDetail} from '@ionic/angular';
import {MenuComponent} from '../menu/menu.component';
import {FormsModule} from '@angular/forms';
import {CreateItemComponent} from '../create-item/create-item.component';
import {ClickOutsideDirective} from "../click-outside.directive";
import {Item} from "../models/item";

@Component({
  selector: 'app-to-do',
  templateUrl: 'to-do-page.component.html',
  styleUrls: ['to-do-page.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonList,
    IonIcon,
    IonCheckbox,
    IonButton,
    IonReorderGroup,
    IonReorder,
    IonButtons,
    MenuComponent,
    IonModal,
    IonInput,
    FormsModule,
    IonFooter,
    CreateItemComponent,
    ClickOutsideDirective,
  ],
})
export class ToDoPage {
  showEdit: boolean = false;
  array: Item[] = [
    {title: "haha", description: "something", time: 34, done: false},
    {title: "hih", description: "something", time: 34, done: false},
    {title: "aklhfjklhklasjhdfjk", description: "something", time: 34, done: false},
    {title: "tetrahydrocannabinol", description: "drugs", time: 34, done: false},
  ];

  constructor() {
    addIcons({
      archiveOutline,
      trashOutline,
      close,
      createOutline,
    });
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // by the reorder group
    ev.detail.complete();
  }

  setShowEdit($event: boolean) {
    if (this.showEdit && !$event) {
      this.showEdit = false;
    } else if (!this.showEdit && $event) {
      this.showEdit = true;
    } else if (this.showEdit && $event) {
      this.showEdit = false;
    } else if (!this.showEdit && !$event) {
      this.showEdit = true;
    }
  }

  isModalOpen = false;

  setCreateModalOpen($isOpen: boolean) {
    this.isModalOpen = $isOpen;
  }
}
