import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"],
})
export class PhotoComponent implements OnInit {
  title = "Alurapic";

  @Input() description = "";
  @Input() url = "";

  constructor() {}

  ngOnInit() {}
}