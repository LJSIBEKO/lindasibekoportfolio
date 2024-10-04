import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {
  @Input() folderName!: string;
  @Input() isClicked!: boolean;

  toggleFolder() {
    this.isClicked = !this.isClicked; // Toggle the clicked state
  }
}
