import { PhotoComment } from "./photo-comment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";
import { catchError, map } from "rxjs/operators";
import { of, throwError } from "rxjs";
import { environment } from "../../../environments/environment";

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}
  listFromUser(userName: string) {
    return this.httpClient.get<Photo[]>(API_URL + "/" + userName + "/photos");
  }
  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append("page", page.toString());
    return this.httpClient.get<Photo[]>(API_URL + "/" + userName + "/photos", {
      params,
    });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("allowComments", allowComments ? "true" : "false");
    formData.append("imageFile", file);
    return this.httpClient.post(API_URL + "/photos/upload", formData, {
      observe: "events",
      reportProgress: true,
    });
  }

  findById(photoId: number) {
    return this.httpClient.get<Photo>(API_URL + "/photos/" + photoId);
  }

  getComments(photoId: number) {
    return this.httpClient.get<PhotoComment[]>(
      API_URL + "/photos/" + photoId + "/comments"
    );
  }

  addComment(photoId: number, commentText: string) {
    return this.httpClient.post(API_URL + "/photos/" + photoId + "/comments", {
      commentText,
    });
  }

  removePhoto(photoId: number) {
    return this.httpClient.delete(API_URL + "/photos/" + photoId);
  }

  like(photoId: number) {
    return this.httpClient
      .post(
        API_URL + "/photos/" + photoId + "/like",
        {},
        { observe: "response" }
      )
      .pipe(map((res) => true))
      .pipe(
        catchError((err) => {
          return err.status == "304" ? of(false) : throwError(err);
        })
      );
  }
}
