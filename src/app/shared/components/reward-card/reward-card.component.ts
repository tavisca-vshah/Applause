import { EmployeeAward } from "./../../models/employee-award";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-reward-card",
  templateUrl: "./reward-card.component.html",
  styleUrls: ["./reward-card.component.css"]
})
export class RewardCardComponent implements OnInit {
  @Input() empoyeeAward: EmployeeAward;
  ngOnInit() {}
}
