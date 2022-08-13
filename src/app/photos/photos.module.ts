import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoFormComponent } from "./photo-form/photo-form.component";
import { PhotosComponent } from "./photo-list/photos/photos.component";
import { FilterByDescription } from "./photo-list/filter-by-description.pipe";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescription,
  ],
  exports: [PhotoComponent],
})
export class PhotosModule {}
