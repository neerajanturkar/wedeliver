import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LoadingService } from "../loading.service";
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loadingService: LoadingService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onLogIn(){
    this.snackBar.open("Authenticating", null, {
      duration: 2000,
    });
   
    this.loadingService.showLoader();
    this.delay(2000).then(response =>{
      this.loadingService.hideLoader();
      this.router.navigate(["/map"]);
    });
    
    

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
