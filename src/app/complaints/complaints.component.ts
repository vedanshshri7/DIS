import { Component, ViewChild } from '@angular/core';
import { AddComplaintsComponent } from './add-complaints/add-complaints.component';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  @ViewChild(AddComplaintsComponent) addComplaintsComponent!: AddComplaintsComponent;

  // Predefined complaints for testing
  complaints: Array<{ name: string; title: string; description: string }> = [
    { name: 'Awani', title: 'Poor Service', description: 'The customer service was unhelpful and rude.' },
    { name: 'Vvvv', title: 'Missing Item', description: 'One of the items in my order was missing.' },
    { name: 'Vedansh', title: 'Wrong Order', description: 'I received the wrong item instead of what I ordered.' }
  ];

  isModalOpen = false;

  openAddComplaintModal() {
    this.isModalOpen = true;
  }

  closeAddComplaintModal() {
    this.isModalOpen = false;
  }

  onComplaintAdded(complaint: { name: string; title: string; description: string }) {
    this.complaints.push(complaint);
    this.closeAddComplaintModal(); // Close modal after adding
  }

  // Method to delete a complaint
  deleteComplaint(index: number) {
    this.complaints.splice(index, 1);
  }
}
