import { RouterModule } from "@angular/router";
import { VMessageModule } from "./../../shared/components/card/vmessage/vmessage.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule,
  ],
})
export class PhotoFormModules {}
