import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { OneTimePinPage } from './one-time-pin.page';

const routes: Routes = [
  {
    path: '',
    component: OneTimePinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [OneTimePinPage]
})
export class OneTimePinPageModule {}
