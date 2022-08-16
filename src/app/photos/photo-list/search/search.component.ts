import { debounceTime } from "rxjs/operators";
import { Subject } from "rxjs/internal/Subject";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, OnDestroy {
  debounce: Subject<string> = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.debounce.pipe(debounceTime(300));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
