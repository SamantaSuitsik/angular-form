import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { invalidNumberValidator } from '../../../shared/invalid-number';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  experienceForm: FormGroup;
  messageType: string;

  constructor(private formBuilder: FormBuilder) {
    this.messageType = ""
    this.experienceForm = this.formBuilder.group({
      name: [
        "", [ 
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        ]
      ],
      surname: [
        "",[
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        ]
      ],
      email: [
        "",[
        Validators.required,
        Validators.email,
        ]
      ],
      experience: [
        null,[
        invalidNumberValidator(1), // parameter - it is customizable how many
        // numbers allowed after the comma
        ]
      ],
    });
  }

  resetForm(): void {
    this.experienceForm.reset();
    this.messageType = "info";
  }

  get name() {
    return this.experienceForm.get("name");
  }
  get surname() {
    return this.experienceForm.get("surname");
  }
  get email() {
    return this.experienceForm.get("email");
  }
  get experience() {
    return this.experienceForm.get("experience");
  }

  onSubmit() {
    console.warn(this.experienceForm.value)
    if (this.experienceForm.invalid) {
      this.messageType = "error"
      return;
    }
    if (this.experienceForm.valid) {
      this.messageType = "success"
    }
  }
}
