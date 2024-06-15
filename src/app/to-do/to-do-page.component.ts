import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonCheckbox,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonReorderGroup,
  IonButtons,
  IonReorder,
  IonFab,
  IonFabButton,
  IonFabList,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { archiveOutline, trashOutline, checkmarkDone } from 'ionicons/icons';
import { ItemReorderEventDetail } from '@ionic/angular';

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
    ExploreContainerComponent,
    IonItem,
    IonList,
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonCheckbox,
    IonInput,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonReorderGroup,
    IonReorder,
    IonButtons,
    IonFab,
    IonFabButton,
    IonFabList,
  ],
})
export class ToDoPage {
  constructor() {
    addIcons({
      archiveOutline,
      trashOutline,
      checkmarkDone,
    });
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // by the reorder group
    ev.detail.complete();
  }
}
