import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}
  listFromUser(userName: string) {
    return this.httpClient.get<Photo[]>(API + "/" + userName + "/photos");
  }
}
