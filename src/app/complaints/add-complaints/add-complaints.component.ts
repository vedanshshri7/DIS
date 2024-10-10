import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-complaints',
  templateUrl: './add-complaints.component.html',
  styleUrls: ['./add-complaints.component.css']
})
export class AddComplaintsComponent {
  name: string = '';
  title: string = '';
  description: string = '';
  type: string = ''; // Declare the type property

  @Output() complaintAdded = new EventEmitter<{ name: string; title: string; description: string; type: string }>();

  addComplaint() {
    const complaint = { name: this.name, title: this.title, description: this.description, type: this.type };
    this.complaintAdded.emit(complaint);
    // Reset fields
    this.name = '';
    this.title = '';
    this.description = '';
    this.type = ''; // Reset the type field
  }

  closeModal() {
    // Logic to close the modal (if applicable)
  }
}
