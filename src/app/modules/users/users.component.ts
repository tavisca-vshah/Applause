import { EmployeeService } from "./../../core/services/employee.service";
import { Component, OnInit } from "@angular/core";
import { Employee } from "../../shared/models/employee";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  employees: Employee[];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.empService
      .getEmployees()
      .subscribe(heroes => (this.employees = heroes));
  }
}
