import { Component, OnInit } from '@angular/core';
import {MatSlideToggleChange , MatSlideToggle} from '@angular/material';
import { MatSnackBar } from '@angular/material';
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
  this
  constructor( private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.distance = localStorage.getItem('distance');
    this.distance = this.distance.split(' ',1);
    console.log(this.distance);
    this.distance_value = 1.5 * this.distance[0];
    this.distance_value = Math.round(this.distance_value);

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
      
    }
    
}
