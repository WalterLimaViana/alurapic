import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"],
})
export class PhotoComponent implements OnInit {
  title = "Alurapic";
  url = "https://img.myloview.com.br/quadros/husky-siberiano-700-64574409.jpg";
  description = "Husky Siberiano";

  constructor() {}

  ngOnInit() {}
}
