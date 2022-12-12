import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplaySearchPageRoutingModule } from './display-search-routing.module';

import { DisplaySearchPage } from './display-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaySearchPageRoutingModule
  ],
  declarations: [DisplaySearchPage]
})
export class DisplaySearchPageModule {}
