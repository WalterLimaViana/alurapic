import { CardModule } from "./../../shared/components/card/card.module";
import { CommonModule } from "@angular/common";
import { PhotoListComponent } from "./photo-list.component";
import { NgModule } from "@angular/core";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
  ],
  imports: [CommonModule, PhotoModule, CardModule],
})
export class PhotoListModule {}
