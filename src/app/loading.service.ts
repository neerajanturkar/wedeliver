import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class LoadingService {

  constructor() { }
  showLoader(){
    $(".custom-loading-container").css('display','flex');
  }
  hideLoader(){
    $(".custom-loading-container").css('display','none');
  }
  
  
}
