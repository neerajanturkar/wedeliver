import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule , MatIconModule , MatButtonToggleModule, MatDividerModule, MatCardModule , MatSlideToggleModule, MatCheckboxModule ,MatFormFieldModule, MatSliderModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,  } from '@angular/forms'
import { MapService } from './map.service';
import { OrderComponent } from './order/order.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    OrderComponent
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
    MatButtonToggleModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
