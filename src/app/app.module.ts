import { BrowserModule } from "@angular/platform-browser";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule, MatAutocompleteModule } from "@angular/material";
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
  MatRadioModule
  
} from "@angular/material";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
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
import { SignupComponent } from "./signup/signup.component";

import { LoadingService } from "./loading.service";


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    SuccessComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatMenuModule,MatIconModule,
    MatRadioModule

  ],
  providers: [MapService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
