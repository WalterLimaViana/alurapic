import { FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { Component, Input, OnInit } from "@angular/core";
import { PhotoComment } from "../../photo/photo-comment";
import { PhotoService } from "../../photo/photo.service";

@Component({
  selector: "app-photo-comments",
  templateUrl: "./photo-comments.component.html",
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ["", Validators.maxLength(300)],
    });
  }
}
