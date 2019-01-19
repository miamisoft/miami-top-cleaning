import { NgModule } from '@angular/core';
import { WindowComponent } from './window/window.component';
import { HighRiseWindowComponent } from './high-rise-window/high-rise-window.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    WindowComponent, 
    HighRiseWindowComponent
  ]
})
export class WindowsModule { }
