import { Photo } from "./../photo/photo";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PhotoService } from "../photo/photo.service";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photo[]> {
    const userName = route.params.userName;
    return this.service.listFromUser(userName);
  }
}
