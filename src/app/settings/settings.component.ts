import { Component, OnInit } from '@angular/core';
import { MatSnackBar,MatSlideToggleChange } from '@angular/material';
import { LoadingService } from "../loading.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  commutes=[];
  commute={
    from:"",
    to:"",
    start:"",
    return:"",
  }
  carrier = false;
  carrier_value = "No";
  constructor(private snackBar: MatSnackBar, 
              private loadingService: LoadingService, 
              private route: ActivatedRoute,
              private router: Router) {
    this.commutes.push(this.commute);
    
   }
  parent: any;
  ngOnInit() {   
    this.parent = localStorage.getItem('settingsParent');
   
  }
  onCommuteAddClick(){
    this.commutes.push(this.commute);
  }

  onSettingsSave(){
    this.snackBar.open("Saving your settings", null, {
      duration: 2000,
    });
    this.loadingService.showLoader();
      this.delay(2000).then(response =>{
        this.loadingService.hideLoader();
        let target = "/" + this.parent;
        this.router.navigate([target]);
      });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  carrierChanged(ob: MatSlideToggleChange){

    if(ob.checked){
        this.carrier_value = "Yes";
        
      }else{
        this.carrier_value = "No";
        
      }
      
    } 
}
