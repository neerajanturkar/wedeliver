import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { OrderComponent } from "./order/order.component";
import { LoginComponent } from "./login/login.component";
import { SuccessComponent } from "./success/success.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [

  { path: "map", component: MapComponent },
  { path: "order", component: OrderComponent },
  { path: "login", component: LoginComponent },
  { path: "success", component: SuccessComponent },
  { path: "signup", component: SignupComponent },
  { path: '', component: LoginComponent},
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  MapComponent,
  OrderComponent,
  LoginComponent,
  SignupComponent
];
