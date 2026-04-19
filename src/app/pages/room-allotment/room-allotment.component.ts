import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-allotment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './room-allotment.component.html',
  styleUrls: ['./room-allotment.component.css'],
})
export class RoomAllotmentComponent {
  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      // Patient Details
      patientName: ['', Validators.required],
      patientId: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emergency: [''],
      medicalHistory: [''],
      allergies: [''],

      // Room Details
      roomNo: ['', Validators.required],
      roomType: ['', Validators.required],
      admissionDate: ['', Validators.required],
      dischargeDate: ['', Validators.required],
      doctor: ['', Validators.required],
      status: ['Admitted', Validators.required],
      amount: ['', Validators.required],
      notes: [''],
    });
  }

  // 🔹 Getter سهل تستخدمه في HTML
  get f() {
    return this.roomForm.controls;
  }

  // 🔹 Submit
  onSubmit() {
    if (this.roomForm.invalid) {
      this.roomForm.markAllAsTouched();
      return;
    }

    console.log('Form Data:', this.roomForm.value);

    // هنا هتبعت لل API
  }
}
