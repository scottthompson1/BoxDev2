import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ForgotPasswordComponent } from './auth-components/forgot-password/forgot-password.component';
import { SignInComponent } from './auth-components/sign-in/sign-in.component';
import { SignUpComponent } from './auth-components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './auth-components/verify-email/verify-email.component';
import { BoxHeaderComponent } from './box-header/box-header.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrimaryPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'activity', component: ActivityPageComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
