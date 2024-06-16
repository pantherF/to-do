import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonChip,
  IonDatetime,
  IonDatetimeButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPopover,
  IonTextarea,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  ],
})
export class CreateItemComponent implements OnInit {
  title: string = 'Create Item';

  constructor() {
    addIcons({
      close,
    });
  }
  datePickerShown = false;

  showDatePicker(show: boolean) {
    this.datePickerShown = show;
  }
  public datetime: string = '';

  ngOnInit() {
    const date = new Date();

    // Set the value of the datetime to 2 days
    // before the current day
    let dayChange = -2;

    // If the day we are going to set the value to
    // is in the previous month then set the day 2 days
    // later instead so it remains in the same month
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    // Set the value of the datetime to the day
    // calculated above
    date.setDate(date.getDate() + dayChange);
    this.datetime = date.toISOString();
  }
}
