import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule , MatIconModule , MatCardModule , MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { MapService } from './map.service';
import { OrderComponent } from './order/order.component';
// import {MatCheckboxModule} from '@angular/material/checkbox';

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
    MatCheckboxModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
