import { LoadingModule } from "./../shared/components/loading/loading.module";
import { AlertModule } from "./../shared/components/alert/alert.module";
import { RequestInterceptor } from "./auth/request.interceptor";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FooterComponent } from "./footer/footer.component";
import { MenuModule } from "../shared/components/menu/menu.module";
import { ShowIfLoggedModule } from "../shared/directives/show-if-logged/show-if-logged.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule,
    ShowIfLoggedModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
