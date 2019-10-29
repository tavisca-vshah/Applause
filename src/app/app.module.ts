import { AppLayoutComponent } from "./shared/layout/AppLayout/AppLayout.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { Approutes } from "./app-routing.module";
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NavigationComponent } from "./shared/header-navigation/navigation.component";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { SpinnerComponent } from "./shared/spinner.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./core/services/in-memory-data.service";
import { UserCardComponent } from './shared/components/user-card/user-card.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AppLayoutComponent,
    NavigationComponent,
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
