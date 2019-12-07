import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule , MatIconModule, MatProgressSpinnerModule , MatButtonToggleModule, MatDividerModule, MatCardModule , MatSlideToggleModule, MatCheckboxModule ,MatFormFieldModule, MatSliderModule} from '@angular/material';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { FormsModule,  } from '@angular/forms'
import { MapService } from './map.service';

import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';

=======
import { LoadingService } from "./loading.service";
>>>>>>> eb557f9b565302500c4d6d9290264eff5cb01fd9

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
<<<<<<< HEAD
    OrderComponent,
    SuccessComponent,
    LoginComponent
=======
>>>>>>> eb557f9b565302500c4d6d9290264eff5cb01fd9
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [MapService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
