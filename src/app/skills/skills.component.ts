import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { name: 'Java', icon: 'bi bi-braces' },
    { name: 'Spring Boot', icon: 'bi bi-gear' },  // Custom icons for Spring Boot might be limited
    { name: 'Angular', icon: 'bi bi-puzzle' },
    { name: 'MongoDB', icon: 'bi bi-database' },
    { name: 'PostgreSQL', icon: 'bi bi-database' },
    { name: 'MySQL', icon: 'bi bi-database' },
    { name: 'HTML', icon: 'bi bi-filetype-html' },
    { name: 'CSS', icon: 'bi bi-filetype-css' },
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx' },
    { name: 'Docker', icon: 'bi bi-box' },
    { name: 'AWS', icon: 'bi bi-cloud' },
    { name: 'Linux', icon: 'bi bi-terminal' },
    { name: 'Git', icon: 'bi bi-git' },
    { name: 'Postman', icon: 'bi bi-cloud' },  // Postman may not have a specific icon
  ];

  frontEndSkills = [
    { name: 'Angular', icon: 'bi bi-puzzle' },
    { name: 'HTML', icon: 'bi bi-filetype-html' },
    { name: 'CSS', icon: 'bi bi-filetype-css' },
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx' }
  ];

  backEndSkills = [
    { name: 'Java', icon: 'bi bi-braces' },
    { name: 'Spring Boot', icon: 'bi bi-gear' },
    { name: 'MongoDB', icon: 'bi bi-database' },
    { name: 'PostgreSQL', icon: 'bi bi-database' },
    { name: 'MySQL', icon: 'bi bi-database' },
    { name: 'Docker', icon: 'bi bi-box' },
    { name: 'AWS', icon: 'bi bi-cloud' },
    { name: 'Linux', icon: 'bi bi-terminal' },
    { name: 'Git', icon: 'bi bi-git' },
    { name: 'Postman', icon: 'bi bi-cloud' }
  ];

}
