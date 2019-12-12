import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }
  parent: any;
  ngOnInit() {
    this.parent = localStorage.getItem('settingsParent');
    this.commutes.push(this.commute);
  }

}
