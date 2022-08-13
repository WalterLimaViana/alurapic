import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Photo } from "../../photo/photo";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"],
})

// Para exibir as fotos após criar a função groupColumns, é necessário mudar o OnInit para OnChanges
export class PhotosComponent implements OnChanges {
  @Input()
  photos: Photo[] = [];
  rows: any[] = [];

  constructor() {}
  /*Esse if significa que se caso houver mudanças, e elas ocorrem devido a mudança do posicionamento das fotos
  o angular a atraves do SimpleChanges trás essas fotos já com o novo posicionamento
  
  */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) this.rows = this.groupColumns(this.photos);
  }
  // A função groupColumns tem um slice que vai exibir as fotos de 3 em 3.
  groupColumns(photos: Photo[]) {
    const newRows = [];
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
