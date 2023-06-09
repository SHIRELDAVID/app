import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';
import { ChatComponent } from './web-socket/socket-io/chat.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'map', component: MapComponent },
 

  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'course-details/:id',
    component: CourseDetailComponent
  },
  {
    path: 'course-add',
    component: CourseAddComponent
  },
  {
    path: 'course-edit/:id',
    component: CourseEditComponent
  },
  {
    path: 'lesson-details/:id',
    component: LessonDetailComponent
  },
  {
    path: 'lesson-add',
    component: LessonAddComponent
  },
  {
    path: 'lesson-edit/:id',
    component: LessonEditComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }