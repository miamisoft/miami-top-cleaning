import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { SharedModule } from '../@shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeamComponent
      }
    ])
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }
