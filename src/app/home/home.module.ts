import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VMessageComponent } from "../shared/components/card/vmessage/vmessage.component";
import { VMessageModule } from "../shared/components/card/vmessage/vmessage.module";

@NgModule({
  declarations: [SignInComponent],
  imports: [ReactiveFormsModule, CommonModule, VMessageModule, RouterModule],
})
export class HomeModule {}
