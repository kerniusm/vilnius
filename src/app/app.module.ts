import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

// angularfire2 modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// app components
import { AppComponent } from './app.component';
import { ServicesComponent } from './admin/services/services.component';
import { LoginComponent } from './admin/login/login.component';
import { ServiceDetailsComponent } from './admin/service-details/service-details.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    LoginComponent,
    ServiceDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // firestore...
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule, // Material...

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
