import { Awards } from "./../../core/mocks/mock-employee-awards";
import { EmployeeAward } from "./../../shared/models/employee-award";
import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [NgbCarouselConfig]
})
export class DashboardComponent implements OnInit {
  employeesAwards: EmployeeAward[];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.employeesAwards = Awards;
  }

  ngOnInit() {}
}
