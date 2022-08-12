import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PhotoComponent, PhotoListComponent],
  exports: [PhotoComponent],
})
export class PhotosModule {}
