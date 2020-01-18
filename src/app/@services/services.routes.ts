import { Routes } from '@angular/router';
import { PressureComponent } from './others/pressure/pressure.component';
import { DustRemovalComponent } from './others/dust-removal/dust-removal.component';
import { FloorComponent } from './others/floor/floor.component';
import { OfficeComponent } from './commercial/office/office.component';
import { WindowComponent } from './others/window/window.component';
import { CarpetComponent } from './floor/carpet/carpet.component';
import { TileComponent } from './floor/tile/tile.component';
import { MarbleComponent } from './floor/marble/marble.component';
import { WaxingComponent } from './floor/waxing/waxing.component';
import { RoughComponent } from './construction/rough/roughcomponent';
import { FinalCleaningComponent } from './construction/final/final.component';
import { TouchUpComponent } from './construction/touchup/touchup.component';
import { GroundsKeepingComponent } from './commercial/grounds-keeping/grounds-keeping.component';
import { BuildingMaintenanceComponent } from './commercial/building-maintenance/building-maintenance.component';
import { TrashRemovalComponent } from './others/trash-removal/trash-removal.component';



export const servicesRoutes: Routes = [

  {
    path: 'commercial',
    children: [
      {
        path: 'office-cleaning',
        component: OfficeComponent
      },
      {
        path: 'building-maintenance',
        component: BuildingMaintenanceComponent
      },
      {
        path: 'grounds-keeping',
        component: GroundsKeepingComponent
      }
    ]
  },

  {
    path: 'construction',
    children: [
      {
        path: 'rough-cleaning',
        component: RoughComponent
      },
      {
        path: 'final-cleaning',
        component: FinalCleaningComponent
      },
      {
        path: 'touch-up-cleaning',
        component: TouchUpComponent
      }
    ]
  },

  {
    path: 'floor',
    children: [
      {
        path: 'carpet-cleaning',
        component: CarpetComponent,
      },
      {
        path: 'tile-cleaning',
        component: TileComponent
      },
      {
        path: 'marble-cleaning',
        component: MarbleComponent
      },
      {
        path: 'waxing-stripping',
        component: WaxingComponent
      }
    ]
  },

  {
    path: 'our-services',
    children: [
      {
        path: 'windows-cleaning',
        component: WindowComponent,
      },
      {
        path: 'pressure-washing',
        component: PressureComponent
      },

      {
        path: 'trash-removal',
        component: TrashRemovalComponent
      },

      {
        path: 'high-level-dust-removal',
        component: DustRemovalComponent
      }
    ]
  }

  // {
  //     path: 'residential',
  //     children: [
  //         {
  //             path: 'appartment-cleaning',
  //             component: AppartmentComponent,
  //         },
  //         {
  //            path: 'house-cleaning',
  //            component: HouseComponent
  //        },

  //        {
  //            path: 'movein-moveout-cleaning',
  //            component: MoveComponent
  //        },

  //        {
  //            path: 'deep-cleaning',
  //            component: DeepComponent
  //        }
  //     ]
  // },

];
