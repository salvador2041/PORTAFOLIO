import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ArticlesComponent } from "../articles/articles.component";
import { SuscribeComponent } from "../suscribe/suscribe.component";

@Component({
  selector: 'app-content',
  imports: [ProfileComponent, ExperienceComponent, EducationComponent, SkillsComponent, ProjectsComponent, TestimonialsComponent, ArticlesComponent, SuscribeComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
