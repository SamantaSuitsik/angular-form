import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message: string;

  constructor() {
    this.message = "";
  }

  @Input() messageType!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["messageType"]) {
      const changedType = changes["messageType"].currentValue;
      
      this.setMessage(changedType);
      
    }

  }

  setMessage(type: string) {
    if (type === "error") {
      this.message = "The form is not valid. Please fill all the fields with appropriate values.";
      return;
    }
    if (type === "success") {
      this.message = "The form has been completed successfully!";
    }
    if (type === "info") {
      this.message = "The form has been reset."
    }
  }

}
