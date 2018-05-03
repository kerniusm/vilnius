import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

// angularfire2 modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// app components
import { AppComponent } from './app.component';
import { ServicesComponent } from './admin/services/services.component';
import { LoginComponent } from './admin/login/login.component';
import { ServiceDetailsComponent } from './admin/service-details/service-details.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContentComponent } from './home/content/content.component';

// locales
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/lt';


//forms validation
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt, 'lt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    LoginComponent,
    ServiceDetailsComponent,
    HomeComponent,
    NavbarComponent,
    ContentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // firestore...
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule, // Material...
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [MatDatepickerModule, MatNativeDateModule,
  //  { provide: MAT_DATE_LOCALE, useValue: 'lt-ts' }
  { provide: LOCALE_ID, useValue: 'lt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
