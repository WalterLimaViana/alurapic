import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./loading.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  imports: [CommonModule],
})
export class LoadingModule {}
