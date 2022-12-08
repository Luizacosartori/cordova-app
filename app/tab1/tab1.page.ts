import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(private flashlight: Flashlight) { 

  }
  onFlashlight(){
    this.flashlight.switchOn();

  }
  offFlashlight(){
    this.flashlight.switchOff();
  }
}

