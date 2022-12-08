import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';
import { IoT1ClickProjects } from 'aws-sdk';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  model = this.device.model;
  system = this.device.platform;
  systemVersion = this.device.version;
  serialNumber = this.device.serial;
  manufacturer = this.device.manufacturer;
  batteryStatus = '';
  status = false;
  message = '';
  constructor(private device: Device, private battery: BatteryStatus) {
    this.battery.onChange().subscribe(status => {
      this.batteryStatus = String(status.level);
      if (Number(this.batteryStatus) <= 10) {
        this.message = "The battery is critial. Phone needs charging"
      } else if (Number(this.batteryStatus) <= 40) {
        this.message = "The battery is low. Phone needs charging"
      } else {
        this.message = "The battery level is ok! ";
      }
    });

    this.battery.onChange().subscribe(status => {
      this.status = status.isPlugged;
    });
  }
  ngOnInit(): void {
  }

}

