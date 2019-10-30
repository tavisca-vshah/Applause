import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApplauseRuleComponent } from "./applauseRule.component";
import { Routes, RouterModule } from "@angular/router";
import { NgbdAccordionBasicComponent } from "../../shared/components/rules-accordion/accordion.component";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { from } from "rxjs";
const routes: Routes = [
  {
    path: "",
    component: ApplauseRuleComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    NgbAccordionModule, 
    RouterModule.forChild(routes)],

  declarations: [ApplauseRuleComponent,
                NgbdAccordionBasicComponent,]
})
export class ApplauseRuleModule {}
