import { PhotoDetailsComponent } from "./photos/photo-details/photo-details.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { GlobalErrorComponent } from "./errors/global-error/global-error.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  {
    path: "user/:userName",
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
    data: {
      title: "Timeline",
    },
  },
  {
    path: "p/add",
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Photo upload",
    },
  },
  {
    path: "p/:photoId",
    component: PhotoDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Photo detail",
    },
  },
  {
    path: "error",
    component: GlobalErrorComponent,
    data: {
      title: "Error",
    },
  },
  {
    path: "not-found",
    component: NotFoundComponent,
    data: {
      title: "Not found",
    },
  },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
