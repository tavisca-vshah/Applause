import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RewardsComponent } from "./rewards.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: RewardsComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RewardsComponent]
})
export class RewardsModule {}
