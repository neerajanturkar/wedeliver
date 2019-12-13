import { Component, OnInit , Inject } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.css"]
})
export class SuccessComponent implements OnInit {
  pickup_datetime: any;
  drop_datetime: any;

  constructor(private router: Router,public dialogRef: MatDialogRef<SuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.pickup_datetime = localStorage.getItem("pickup");
    this.drop_datetime = localStorage.getItem("drop");
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
