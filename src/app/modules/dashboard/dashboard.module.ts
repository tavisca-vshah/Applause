import { SummaryPipe } from "./../../shared/pipes/summary.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { RewardCardComponent } from "../../shared/components/reward-card/reward-card.component";
import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { DashboardTimelineComponent } from "../../shared/components/dashboard-timeline/dashboard-timeline.component";
import { DashboardPrStatsComponent } from "../../shared/components/dashboard-pr-stats/dashboard-pr-stats.component";
import { DashboardTimesheetStatsComponent } from "../../shared/components/dashboard-timesheet-stats/dashboard-timesheet-stats.component";
import { HonourCardComponent } from "../../shared/components/honour-card/honour-card.component";
import { HonourBannerComponent } from "../../shared/components/honour-banner/honour-banner.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbProgressbarModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    RewardCardComponent,
    DashboardTimelineComponent,
    DashboardPrStatsComponent,
    DashboardTimesheetStatsComponent,
    HonourCardComponent,
    SummaryPipe,
    HonourBannerComponent
  ]
})
export class DashboardModule {}
