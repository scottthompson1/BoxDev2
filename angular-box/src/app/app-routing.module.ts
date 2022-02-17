import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { BoxHeaderComponent } from './box-header/box-header.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrimaryPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'activity', component: ActivityPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
