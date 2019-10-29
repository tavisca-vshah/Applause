import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule],
  declarations: [UsersComponent]
})
export class UsersModule {}
