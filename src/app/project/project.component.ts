import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  projects = [
    {
      name: 'Taxi Finder',
      description: 'An application to find taxis.',
      imageUrl: 'assets/taxi-finder.png', // Update with your image path
      codeUrl: 'https://github.com/yourusername/taxi-finder', // Update with your code URL
      projectUrl: 'https://yourprojecturl.com/taxi-finder' // Update with your project URL
    },
    {
      name: 'Tic Tac Toe',
      description: 'A simple Tic Tac Toe game.',
      imageUrl: 'assets/images/tic-tac-toe.jpg', // Update with your image path
      codeUrl: 'https://github.com/yourusername/tic-tac-toe', // Update with your code URL
      projectUrl: 'https://yourprojecturl.com/tic-tac-toe' // Update with your project URL
    }
  ];
  folderName = "Backend";

  backendProjects = [
    {
      name: 'Backend Project 1',
      description: 'Description of Backend Project 1',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Backend Project 2',
      description: 'Description of Backend Project 2',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  frontendProjects = [
    {
      name: 'Frontend Project 1',
      description: 'Description of Frontend Project 1',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Frontend Project 2',
      description: 'Description of Frontend Project 2',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  activeFolder: 'backend' | 'frontend' | null = null; // Controls which folder's projects are displayed

  // Handles when a folder is clicked, shows its projects
  onFolderClick(folder: 'backend' | 'frontend') {
    this.activeFolder = folder;
  }

  // Go back to showing the folders instead of projects
  goBack() {
    this.activeFolder = null;
  }

  // Getter for currently visible projects based on the folder clicked
  get visibleProjects() {
    if (this.activeFolder === 'backend') {
      return this.backendProjects;
    } else if (this.activeFolder === 'frontend') {
      return this.frontendProjects;
    }
    return [];
  }
}
