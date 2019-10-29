import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RewardsComponent } from "./rewards.component";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    component: RewardsComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule],
  declarations: [RewardsComponent]
})
export class RewardsModule {}
