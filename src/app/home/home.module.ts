import { SignUpComponent } from "./signup/signup.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/card/vmessage/vmessage.module";

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule,
    FormsModule,
  ],
})
export class HomeModule {}
