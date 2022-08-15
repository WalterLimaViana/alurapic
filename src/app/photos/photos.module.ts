import { PhotoFormModules } from "./photo-form/photo-form.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    PhotoModule,
    PhotoListModule,
    PhotoFormModules,
    HttpClientModule,
    CommonModule,
  ],
})
export class PhotosModule {}
