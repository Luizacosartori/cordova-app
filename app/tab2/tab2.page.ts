import { Component, OnInit } from '@angular/core';
// import { File } from '@awesome-cordova-plugins/file/ngx';
// import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { RecordsEventFilterSensitiveLog } from '@aws-sdk/client-s3';
// import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
// import { MediaCapture, MediaFile, CaptureAudioOptions } from '@awesome-cordova-plugins/media-capture/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  audio: any;
  keys: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  startRecording() {
    // var option: CaptureAudioOptions = {
    //   limit: 1
    // }
    // this.media.captureAudio(option);
  }

  stopRecording() {


  }

}
