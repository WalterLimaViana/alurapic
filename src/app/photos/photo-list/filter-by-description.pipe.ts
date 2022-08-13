import { Photo } from "./../photo/photo";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filterByDescription" })
export class FilterByDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if (descriptionQuery) {
      // pega a description transforma em lowerCase e compara com as descriptions, se estiver coloca na dascriptionQuery
      return photos.filter((photo) =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
      //Se não estiver, retorna a lista de todas as fotos.
    } else {
      return photos;
    }
  }
}
