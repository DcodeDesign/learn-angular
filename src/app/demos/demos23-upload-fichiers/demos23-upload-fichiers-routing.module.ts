import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demos23UploadFichiersComponent } from './demos23-upload-fichiers.component';

const routes: Routes = [{ path: '', component: Demos23UploadFichiersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demos23UploadFichiersRoutingModule { }
