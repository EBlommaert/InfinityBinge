import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhasesPage } from './phases';

@NgModule({
  declarations: [
    PhasesPage,
  ],
  imports: [
    IonicPageModule.forChild(PhasesPage),
  ],
})
export class PhasesPageModule {}
