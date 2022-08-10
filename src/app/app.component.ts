import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "AluraPic";
  photos = [
    {
      url: "https://img.myloview.com.br/quadros/husky-siberiano-700-64574409.jpg",
      description: "Husky",
    },
    {
      url: "https://love.doghero.com.br/wp-content/uploads/2017/09/Golden-destaque-1024x576.gif",
      description: "Golden",
    },
  ];
}
