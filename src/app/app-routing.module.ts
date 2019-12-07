import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
    { path: 'map', component: MapComponent },
    { path: 'order', component: OrderComponent },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [MapComponent, OrderComponent];