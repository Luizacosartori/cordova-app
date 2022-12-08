import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
// import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
// import { File } from '@awesome-cordova-plugins/file/ngx';
// import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  providers: [
    // Media,
    // MediaObject,
    // File,
    // FileOpener,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
