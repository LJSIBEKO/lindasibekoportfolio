import {Component, EventEmitter, Input, Output} from '@angular/core';

interface Project {
  name: string;
  description: string;
  imageUrl: string; // URL for the project image
}

@Component({
  selector: 'app-open-folder',
  templateUrl: './open-folder.component.html',
  styleUrls: ['./open-folder.component.css']
})
export class OpenFolderComponent {
  @Input() header!: string; // Header title for the folder
  @Input() projects: Project[] = []; // List of projects to display

  @Output() backClicked = new EventEmitter<void>(); // Event to emit when back button is clicked

  goBack() {
    this.backClicked.emit(); // Emit the backClicked event

  }
}
