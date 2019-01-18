import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { HighRiseWindowComponent } from './high-rise-window/high-rise-window.component';
import { windowsRoutes } from './windows.routes';
import { SharedModule } from '../@shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(windowsRoutes)
  ],
  declarations: [
    WindowComponent, 
    HighRiseWindowComponent
  ]
})
export class WindowsModule { }
