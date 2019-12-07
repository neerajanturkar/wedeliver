import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  myModel = true;
  show_logout = false;
  constructor() { }

  ngOnInit() {
  }
  formatLabel(value: any) {
    if (value <= 10) {
      return value + 'kg';
    }
    return value;
  }

}
