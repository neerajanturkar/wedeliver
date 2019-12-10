import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatCardModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSnackBarModule,
  MatDialogModule,
  MatMenuModule,
  
} from "@angular/material";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { MapService } from "./map.service";

import {
  DlDateTimeDateModule,
  DlDateTimePickerModule
} from "angular-bootstrap-datetimepicker";
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OrderComponent } from "./order/order.component";
import { SuccessComponent } from "./success/success.component";
import { LoginComponent } from "./login/login.component";

import { LoadingService } from "./loading.service";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    SuccessComponent,
    LoginComponent
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
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,MatIconModule
  ],
  providers: [MapService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
