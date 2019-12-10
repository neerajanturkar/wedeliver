import { Component, OnInit } from '@angular/core';
import {MatSlideToggleChange , MatSlideToggle, MatDialog} from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { LoadingService } from "../loading.service";
import { Router, ActivatedRoute } from "@angular/router";
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  myModel = true;
  show_logout = false;
  fragile = false;
  fragile_value = "No";
  selectedValuable;
  insurance = 0;
  distance: any;
  distance_value = 0;
  weight_value: any;
  weight_amount: any;
  total: any;
  includeInsurance= true;
  parent="map";
  constructor( private snackBar: MatSnackBar,
               private loadingService: LoadingService,
               private router: Router,
               public dialog: MatDialog
               ) { 
                 
               }

  ngOnInit() {
    this.distance = localStorage.getItem('distance');
    this.distance = this.distance.split(' ',1);
    console.log(this.distance);
    this.distance_value = 1.5 * this.distance[0];
    this.distance_value = Math.round(this.distance_value);
    this.weight_amount = 3;
    this.total = this.distance_value + this.weight_amount;
    localStorage.setItem('settingsParent','order');
  }
  formatLabel(value: any) {
    if (value <= 10) {
      return value + 'kg';
    }
    return value;
  }
  fragileChanged(ob: MatSlideToggleChange){

    if(ob.checked){
        this.fragile_value = "Yes";
        
      }else{
        this.fragile_value = "No";
        
      }
      
    } 
    onValuableChange(val: string) {
      
        this.selectedValuable = val;
        
        switch(val){
          case "high":
            this.insurance = 7;
            break;
          case "medium":
            this.insurance = 5;
            break;
          case "low":
            this.insurance = 3;
            break;
        }
        let msg = "Optional insurance of " + this.insurance + "€ added. ";
        this.snackBar.open(msg, null, {
          duration: 2000,
        });
        this.calculateTotal();
    }
    onWeightChange(){
      console.log(this.weight_value);
      this.weight_amount = 3 + Math.round(this.weight_value * 0.7);
      this.calculateTotal();
    }
    calculateTotal(){
      if(this.includeInsurance)
        this.total = this.distance_value + this.weight_amount + this.insurance;
      else
        this.total = this.distance_value + this.weight_amount; 
    }
    onInsuranceClick(){
      this.calculateTotal();
    }
    submitRequest(){
    
      this.snackBar.open("Sending Requests", null, {
        duration: 2000,
      });
     
      this.loadingService.showLoader();
      this.delay(2000).then(response =>{
        this.loadingService.hideLoader();
        this.openDialog();
      });
      
     
    }
      delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(SuccessComponent, {
        width: '80%',
        height: '80%',
        disableClose: true 
        
        
        // data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
}
