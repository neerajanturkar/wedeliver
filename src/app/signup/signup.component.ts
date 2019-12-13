import { Component, OnInit,ViewChild } from "@angular/core";
import { MatSnackBar, MatStepper , MatDialog} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { supportsWebAnimations } from "@angular/animations/browser/src/render/web_animations/web_animations_driver";
import { Router, ActivatedRoute } from "@angular/router";
import { LoadingService } from "../loading.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  rePassword: any;
  isCarrier: boolean;

  constructor(private _formBuilder: FormBuilder,private snackBar: MatSnackBar, 
              public dialog: MatDialog, 
              private loadingService: LoadingService, private route: ActivatedRoute,
              private router: Router,) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl : ["", Validators.required]
    })
  }
  validatePassword(){
    if(this.password !== this.rePassword){
      this.snackBar.open("Passwords do not match", null, {
        duration: 2000,
      });
      this.stepper.selectedIndex = 1;
    }


  }
  submitClick(){
    if(this.firstName === undefined || this.lastName === undefined){
      this.snackBar.open("All fields Mandatory", null, {
        duration: 2000,
      });
      this.stepper.selectedIndex = 0;
    } else
    if(this.email === undefined || this.password === undefined || this.rePassword === undefined){
      this.snackBar.open("All fields Mandatory", null, {
        duration: 2000,
      });
      this.stepper.selectedIndex = 1;
    } else {
      this.snackBar.open("Setting up account", null, {
        duration: 2000,
      });
     
      this.loadingService.showLoader();
      this.delay(2000).then(response =>{
        this.loadingService.hideLoader();
        this.router.navigate(["/map"]);
      });
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
 
  
  
}
