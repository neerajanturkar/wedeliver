import { Component, OnInit , Inject } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.css"]
})
export class SuccessComponent implements OnInit {
  constructor() {}


  constructor(private router: Router,public dialogRef: MatDialogRef<SuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  newOrder(){
    this.router.navigate(["/map"]);
    this.dialogRef.close();
  }
  logout(){
    this.router.navigate(["/"]);
    this.dialogRef.close();
  }
}
