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
        MatTableModule,
        MatSelectModule,
        MatTabsModule,
        MatIconModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatSortModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AuthenticationService } from './services/authentication.service';
import { StorageService } from './services/storage.service';
import { Guard } from './guard/guard';
import { Guard2 } from './guard/guard2';
import { BaseService } from './services/base.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FirstbasicComponent } from './components/screens/basic/firstbasic/firstbasic.component';
import { SecondbasicComponent, DialogContent, DialogConfirm } from './components/screens/basic/secondbasic/secondbasic.component';
import { FinalbasicComponent } from './components/screens/basic/finalbasic/finalbasic.component';
import { FirstpayerComponent } from './components/screens/payer/firstpayer/firstpayer.component';
import { PayertableComponent } from './components/screens/payer/firstpayer/payertable/payertable.component';
import { TablesService } from './services/tables.service';
import { AdminComponent } from './components/screens/admin/admin.component';
import { AdmintableComponent } from './components/screens/admin/admintable/admintable.component';




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
    DialogContent,
    DialogConfirm,
    FirstpayerComponent,
    PayertableComponent,
    AdminComponent,
    AdmintableComponent
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
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    CalendarModule.forRoot(),
    RecaptchaModule.forRoot(),
    Routing,
    MatDialogModule,
    PdfViewerModule,
  ],
  providers: [
    AuthenticationService,
    StorageService,
    BaseService,
    TablesService,
    Guard,
    Guard2,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogContent,
    DialogConfirm
  ]
})
export class AppModule { }
