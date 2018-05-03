import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

// angularfire2 modules

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// material modules

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';


// app components
import { AppComponent } from './app.component';
import { ServicesComponent } from './admin/services/services.component';
import { LoginComponent } from './admin/login/login.component';
import { ServiceDetailsComponent } from './admin/service-details/service-details.component';
import { HomeComponent } from './home/home.component';
import { ClassificatorComponent } from './admin/services/classificator/classificator.component';
import { NotificationsComponent } from './core/notifications/notifications.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContentComponent } from './home/content/content.component';
// app guards
import { AuthGuard } from './core/auth/auth.guard';

// app sevices
import { AuthService } from './core/auth/auth.service';
import { ClassificatorService } from './admin/services/classificator/classificator.service';
// locales
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/lt';

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
    ClassificatorComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    AngularFireModule.initializeApp(environment.firebase), // angularfire2...
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule, // Material...
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
  ],
  entryComponents:[NotificationsComponent],
  providers: [AuthService, AuthGuard, ClassificatorService, NotificationsComponent, MatDatepickerModule, MatNativeDateModule,
    //  { provide: MAT_DATE_LOCALE, useValue: 'lt-ts' }
    { provide: LOCALE_ID, useValue: 'lt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
