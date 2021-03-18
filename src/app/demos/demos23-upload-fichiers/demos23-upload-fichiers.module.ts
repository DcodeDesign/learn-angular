import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demos23UploadFichiersRoutingModule } from './demos23-upload-fichiers-routing.module';
import { Demos23UploadFichiersComponent } from './demos23-upload-fichiers.component';


@NgModule({
  declarations: [Demos23UploadFichiersComponent],
  imports: [
    CommonModule,
    Demos23UploadFichiersRoutingModule
  ]
})
export class Demos23UploadFichiersModule { }
