import { ShowIfLoggedModule } from "./../../shared/directives/show-if-logged/show-if-logged.module";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { VMessageModule } from "./../../shared/components/card/vmessage/vmessage.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoModule } from "../photo/photo.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    ShowIfLoggedModule,
  ],
})
export class PhotoDetailsModule {}
