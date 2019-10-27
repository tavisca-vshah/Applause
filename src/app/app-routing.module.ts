import { Routes } from "@angular/router";

import { AppLayoutComponent } from "./shared/layout/AppLayout/AppLayout.component";

export const Approutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "users",
        loadChildren: "./modules/users/users.module#UsersModule"
      },
      {
        path: "rewards",
        loadChildren: "./modules/rewards/rewards.module#RewardsModule"
      },
      {
        path: "rules",
        loadChildren:
          "./modules/applauseRule/applauseRule.module#ApplauseRuleModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/dashboard"
  }
];
