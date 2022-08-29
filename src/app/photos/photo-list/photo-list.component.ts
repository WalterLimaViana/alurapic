import { Photo } from "./../photo/photo";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = "";
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;
      //O debounce aguarda 300ms após o usuário terminar de digitar e assim colocar esse valor no filter para fazer a busca
    });
  }

  //O ngOnDestroy é utilizado para 'destruir' o que fica armazenado na memória

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = "";
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
