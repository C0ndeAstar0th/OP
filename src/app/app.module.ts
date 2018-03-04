import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule,
        MatCardModule, MatDividerModule,
        MatProgressBarModule,
        MatGridListModule,
        MatToolbarModule,
        MatTableModule} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { StorageService } from './services/storage.service';
import { Guard } from './guard/guard';
import { Guard2 } from './guard/guard2';
import { HeaderComponent } from './components/main/header/header.component';
import { FirstbasicComponent } from './components/screens/basic/firstbasic/firstbasic.component';
import { SecondbasicComponent } from './components/screens/basic/secondbasic/secondbasic.component';
import { FinalbasicComponent } from './components/screens/basic/finalbasic/finalbasic.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    FirstbasicComponent,
    SecondbasicComponent,
    FinalbasicComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatTableModule,
    CalendarModule.forRoot(),
    RecaptchaModule.forRoot(),
    Routing,
  ],
  providers: [AuthenticationService,
    StorageService,
    Guard,
    Guard2,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
