import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() show_logout: boolean; 
  @Input() parent: any;
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onSettingsClick(){
    this.router.navigate(['/settings']);
  }
  onBackClicked(){
    this.router.navigate(['/'+this.parent]);
  }
  logout(){
    this.router.navigate(["/login"]);
   
  }

}
