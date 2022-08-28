import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { Observable } from "rxjs";
import { PhotoComment } from "../photo/photo-comment";

@Component({
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.css"],
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  comment$: Observable<PhotoComment[]>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}
  ngOnInit(): void {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId);
    this.comment$ = this.photoService.getComment(photoId);
  }
}
