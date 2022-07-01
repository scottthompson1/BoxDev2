import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxHeaderComponent } from './box-header/box-header.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { GraphDisplayComponent } from './activity-page/graph-display/graph-display.component';
import { BoxContainerComponent } from './box-container/box-container.component';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { FirebaseCRUDService } from './services/firebase-crud.service';
import { SignInComponent } from './auth-components/sign-in/sign-in.component';
import { SignUpComponent } from './auth-components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth-components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth-components/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';
import { AccountPageComponent } from './account-page/account-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxHeaderComponent,
    PrimaryPageComponent,
    NavigationComponent,
    AboutPageComponent,
    ActivityPageComponent,
    FooterInfoComponent,
    GraphDisplayComponent, 
    BoxContainerComponent, 
    SignInComponent, 
    SignUpComponent, 
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AccountPageComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseCRUDService, AuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
