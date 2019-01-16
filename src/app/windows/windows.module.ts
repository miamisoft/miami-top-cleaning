import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { HighRiseWindowComponent } from './high-rise-window/high-rise-window.component';
import { windowsRoutes } from './windows.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(windowsRoutes)
  ],
  declarations: [WindowComponent, HighRiseWindowComponent]
})
export class WindowsModule { }
