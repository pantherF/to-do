import {Component, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonChip,
  IonDatetime,
  IonDatetimeButton, IonFabButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTextarea,
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {close, notificationsOutline} from 'ionicons/icons';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonTextarea,
    IonChip,
    IonIcon,
    IonLabel,
    IonDatetimeButton,
    IonDatetime,
    IonModal,
    FormsModule,
    IonItem,
    IonButtons,
    IonButton,
    IonFabButton,
  ],
})
export class CreateItemComponent implements OnInit {
  title: string = 'Create Item';
  showTimePicker: boolean = false;

  mockTagData = ['exercise', 'health',];
  tagString = '';

  constructor() {
    addIcons({
      close,
      notificationsOutline
    });
  }

  public datetime: string = '';

  ngOnInit() {
    const date = new Date();
    this.datetime = date.toISOString();
  }

  openTimeSetter() {
    this.showTimePicker = !this.showTimePicker;
  }

  addTag(tag: string) {
    console.log(tag);
  }

  removeTag(tag: string) {
    console.log(tag);
  }
}
