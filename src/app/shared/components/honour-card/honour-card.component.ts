import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "honour-card",
  templateUrl: "./honour-card.component.html",
  styleUrls: ["./honour-card.component.css"]
})
export class HonourCardComponent implements OnInit {
  @Input() employee: any;
  constructor() {}
  ngOnInit() {}
}
