import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApplauseRuleComponent } from "./applauseRule.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ApplauseRuleComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ApplauseRuleComponent]
})
export class ApplauseRuleModule {}
