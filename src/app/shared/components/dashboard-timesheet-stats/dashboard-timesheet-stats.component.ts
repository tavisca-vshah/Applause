import { Component, OnInit } from "@angular/core";
import { single, generateData } from "./chartData";
import { colorSets } from "@swimlane/ngx-charts/release/utils/color-sets";

@Component({
  selector: "dashboard-timesheet-stats",
  templateUrl: "./dashboard-timesheet-stats.component.html",
  styleUrls: ["./dashboard-timesheet-stats.component.css"]
})
export class DashboardTimesheetStatsComponent implements OnInit {
  single: any[];
  dateData: any[];
  gradient = false;
  tooltipDisabled = false;
  chartDimension = [411, 293];
  showLabels = true;

  colorScheme = {
    domain: [
      "#745af2",
      "#ffb22b",
      "#398bf7",
      "#ef5350",
      "#06d79c",
      "#cccccc",
      "#FF5722"
    ]
  };

  constructor() {
    Object.assign(this, {
      single
    });
    this.dateData = generateData(6, false);
  }

  select(data) {
    console.log("Item clicked", data);
  }

  onLegendLabelClick(entry) {
    console.log("Legend clicked", entry);
  }
  ngOnInit() {}
}
