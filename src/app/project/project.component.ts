import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  activeFolder: 'backend' | 'frontend' | null = null;

  onFolderClick(folder: 'backend' | 'frontend') {
    this.activeFolder = folder;
  }

  goBack() {
    this.activeFolder = null;
  }
}