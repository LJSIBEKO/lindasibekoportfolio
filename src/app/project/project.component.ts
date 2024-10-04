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
  folderName="Backend";
}
